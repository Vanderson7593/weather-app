import { FC } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

const City: FC<{
  name: string;
  country: string;
  onPress: () => void;
}> = ({ country, name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="p-4 bg-slate-200 rounded-2xl">
        <Text className="text-xl font-heading">{name}</Text>
        <Text className="text-sm text-gray-400 font-heading">{country}</Text>
      </View>
    </Pressable>
  );
};

export default City;
