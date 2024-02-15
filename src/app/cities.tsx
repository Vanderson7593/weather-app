import { router } from 'expo-router';
import { FC } from 'react';
import { FlatList, View } from 'react-native';

import City from '@/components/city';
import { useCoordsStore } from '@/stores/use-city';
import { Coord } from '@/types/weather';

const CITIES = [
  { name: 'Luanda', country: 'Angola', lat: -8.838333, lon: 13.234444 },
  { name: 'Sāo Paulo', country: 'Brasil', lat: -23.547, lon: -46.636 },
  { name: 'Lisbon', country: 'Portugal', lat: 38.726, lon: -9.148 },
  { name: 'London', country: 'England', lat: 51.508, lon: -0.126 },
  { name: 'Washington', country: 'US', lat: 38.895, lon: -77.036 },
];

const Cities: FC = () => {
  const coordsStore = useCoordsStore();

  const onSelectCountry = ({ lat, lon }: Coord) => {
    coordsStore.updateCoords({ lat, lon });
    router.back();
  };

  return (
    <View className="p-4">
      <FlatList
        data={CITIES}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <City
            onPress={() => onSelectCountry({ lat: item.lat, lon: item.lon })}
            key={item.name}
            {...item}
          />
        )}
      />
    </View>
  );
};

export default Cities;
