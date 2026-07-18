import React from 'react';

export interface WeatherData {
current?: {
temperature_2m: number;
weather_code: number;
};
daily?: {
temperature_2m_max: number[];
temperature_2m_min: number[];
};
city_name?: string;
error?: string;
}

export interface WeatherWidgetProps {
weather: WeatherData;
}


const getWeatherIcon = (code?: number) => {
if (code === undefined) return '❓';
if (code === 0) return '☀️';
if (code >= 1 && code <= 3) return '⛅';
if (code >= 45 && code <= 48) return '🌫️';
if (code >= 51 && code <= 67) return '🌧️';
if (code >= 71 && code <= 77) return '❄️';
if (code >= 80 && code <= 82) return '☔';
if (code >= 95) return '⚡';
return '☁️';
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
const currentTemp = weather.current?.temperature_2m;
const weatherCode = weather.current?.weather_code;
const maxTemp = weather.daily?.temperature_2m_max?.[0];
const minTemp = weather.daily?.temperature_2m_min?.[0];

  return (
    <div className="weather-widget">
      <div className="text-sm font-semibold">{weather.city_name || 'Unknown'}</div>
      {weather.error ? (
        <div className="text-red-400 text-sm">{weather.error}</div>
      ) : (
        <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-5xl" role="img" aria-label="weather status">
          {getWeatherIcon(weatherCode)}
        </span>
        <div>
          <div className="text-4xl font-bold tracking-tighter">
            {currentTemp !== undefined ? `${currentTemp}°` : '--°'}
          </div>
        </div>
      </div>

      <div className="text-right text-sm font-medium">
        <div className="text-red-400">H: {maxTemp !== undefined ? `${maxTemp}°` : '--°'}</div>
        <div className="text-blue-400">L: {minTemp !== undefined ? `${minTemp}°` : '--°'}</div>
      </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;