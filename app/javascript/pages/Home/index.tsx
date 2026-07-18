import React from 'react';
import { Head } from '@inertiajs/react';
import WeatherWidget from '@/components/atoms/Weather';

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

const Index: React.FC<HomeProps> = ({ weather, userName }) => {
  return (
    <>
      <Head title="Smart Desktop" />
      <WeatherWidget weather={weather}/>
      <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
        <h1 className="text-3xl font-bold mb-8">
          Welcome back, <span className="text-cyan-400">{userName}</span>
        </h1>
      </div>
    </>
  );
};

export default Index;