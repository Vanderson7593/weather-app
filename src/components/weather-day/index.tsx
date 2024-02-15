import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { List } from '@/types/weather';

const WeatherDay: FC<{ forecast: List }> = ({ forecast }) => {
  return (
    <View className="flex-row justify-between items-center bg-slate-200 py-2 px-4 rounded-xl">
      <Text className="font-body text-gray-500 text-lg w-10">
        {new Date(forecast.dt_txt.split(' ')[0])
          .toLocaleDateString('en-US', {
            weekday: 'short',
          })
          .replace('.', '')}
      </Text>
      <View className="flex-row items-center gap-x-2 w-32">
        <Image
          src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon.replace('n', 'd')}@4x.png`}
          style={{ height: 36, width: 36 }}
        />
        <Text className="font-heading text-lg">{forecast.weather[0].main}</Text>
      </View>

      <View className="flex-row items-center">
        <Ionicons name="water" size={20} color="#74ccf4" />
        <Text className="font-body text-gray-500 text-lg">
          {forecast.main.humidity}%
        </Text>
      </View>

      <View className="flex-row gap-x-2">
        <Text className="font-heading text-lg">
          {Math.floor(forecast.main.temp / 10)}&#176;
        </Text>
      </View>
    </View>
  );
};

export default WeatherDay;
