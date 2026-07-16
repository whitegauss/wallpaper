class WeatherService
  CITIES = JSON.parse(File.read(Rails.root.join("config", "cities.json"))).with_indifferent_access

  CACHE_EXPIRES_IN = 1.hour

  def self.fetch_current_weather(city_key = "nagareyama")
    city = CITIES[city_key]
    return { error: "指定された都市(#{city_key})のデータがありません" } unless city

    cache_key = "weather_#{city_key}"

    Rails.cache.fetch(cache_key, expires_in: CACHE_EXPIRES_IN) do
      Rails.logger.info "[WeatherService] Fetching from API for #{city_key}..." # APIを叩いた時だけログを出す
      fetch_from_api(city)
    end
  end

  private

  def self.fetch_from_api(city)
    url = "https://api.open-meteo.com/v1/forecast?latitude=#{city[:lat]}&longitude=#{city[:lon]}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo"
    uri = URI.parse(url)

    begin
      response = Net::HTTP.get_response(uri)

      if response.is_a?(Net::HTTPSuccess)
        data = JSON.parse(response.body)
        data.merge("city_name" => city[:name])
      else
        { error: "天気データの取得に失敗しました (Status: #{response.code})" }
      end
    rescue StandardError => e
      { error: "通信エラーが発生しました: #{e.message}" }
    end
  end
end
