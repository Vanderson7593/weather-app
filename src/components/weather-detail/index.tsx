import React, { FC, PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

const WeatherDetail: FC<
  PropsWithChildren<{
    icon: React.ReactNode;
    value: string;
    label: string;
  }>
> = ({ icon, label, value }) => {
  return (
    <View className="w-28 px-4 py-2 bg-white rounded-3xl shadow-lg items-center">
      {icon}
      <Text className="font-heading">{value}</Text>
      <Text className="font-body text-gray-400">{label}</Text>
    </View>
  );
};

export default WeatherDetail;
