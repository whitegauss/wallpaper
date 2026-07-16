# frozen_string_literal: true

class InertiaExampleController < InertiaController
  def index
    render inertia: 'Home/index', props: {
      weather: WeatherService.fetch_current_weather,
      userName: 'Guest',
    }
  end
end
