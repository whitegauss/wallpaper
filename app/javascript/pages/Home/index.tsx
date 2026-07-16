import React from 'react';
import { Head } from '@inertiajs/react';

interface WeatherData {
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

interface HomeProps {
  weather: WeatherData;
  userName: string;
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

const Index: React.FC<HomeProps> = ({ weather, userName }) => {
  const currentTemp = weather.current?.temperature_2m;
  const weatherCode = weather.current?.weather_code;
  const maxTemp = weather.daily?.temperature_2m_max?.[0];
  const minTemp = weather.daily?.temperature_2m_min?.[0];

  return (
    <>
      <Head title="Smart Desktop" />

      <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
        <h1 className="text-3xl font-bold mb-8">
          Welcome back, <span className="text-cyan-400">{userName}</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-80 shadow-lg border border-white/20">
          <h2 className="text-sm text-gray-400 font-bold tracking-wider mb-4 uppercase">
            Weather ({weather.city_name || 'Unknown'})
          </h2>

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
      </div>
    </>
  );
};

export default Index;