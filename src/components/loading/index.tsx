import { FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const Loading: FC = () => (
  <View className="flex-1 justify-center items-center gap-y-6">
    <ActivityIndicator size="large" />
    <Text>Getting city weather forecast</Text>
  </View>
);

export default Loading;
