import { FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const Error: FC = () => (
  <View className="flex-1 justify-center items-center gap-y-6">
    <ActivityIndicator size="large" />
    <Text>Something went wrong!</Text>
  </View>
);

export default Error;
