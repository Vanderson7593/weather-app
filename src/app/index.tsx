import { Ionicons, Feather } from '@expo/vector-icons';
import { Link, router, useFocusEffect } from 'expo-router';
import { isEmpty } from 'lodash';
import { FC, useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useMutation } from 'react-query';

import { WeatherDetail, Error, Loading } from '@/components';
import WeatherDay from '@/components/weather-day';
import { getForecast } from '@/services/open-weather-map';
import { useCoordsStore } from '@/stores/use-city';
import { City, List } from '@/types/weather';
import { parseForecast } from '@/utils';

const Home: FC = () => {
  const [forecast, setForecast] = useState<List[]>([]);
  const [city, setCity] = useState<City>();
  const coorsStore = useCoordsStore();
  const {
    mutate: mutateGetForecast,
    isLoading,
    isError,
  } = useMutation('get-forecast', getForecast, {
    onSuccess(res) {
      setCity(res.city);
      setForecast(parseForecast(res.list));
    },
    onError(err) {
      console.error(err);
    },
  });

  useFocusEffect(() => {
    if (!coorsStore.coords.lat) {
      router.push('/cities');
    }
  });

  useEffect(() => {
    mutateGetForecast({
      lat: coorsStore.coords.lat,
      lon: coorsStore.coords.lon,
    });
  }, [coorsStore.coords.lat, coorsStore.coords.lon]);

  if (!isLoading && isEmpty(forecast)) return;

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <View className="p-4">
      <View className="flex items-center">
        <Link href="/cities" asChild>
          <Pressable>
            <View className="flex-row justify-center items-center gap-1 pt-4">
              <Ionicons name="location-sharp" size={22} color="#000" />
              <Text className="font-heading text-2xl">
                {city?.name}, {city?.country}
              </Text>
            </View>
          </Pressable>
        </Link>
      </View>

      <View className="flex-row justify-center pt-16">
        <Image
          className="bg-slate-200 rounded-3xl"
          src={`https://openweathermap.org/img/wn/${forecast[0].weather[0].icon.replace('n', 'd')}@4x.png`}
          style={styles.image}
        />
        <View className="ml-8">
          <Text className="text-lg text-black font-body mb-[-16px]">Today</Text>
          <View className="flex-row">
            <Text className="text-[88px] font-bold">
              {Math.floor(forecast[0]?.main.temp / 10)}
            </Text>
            <View className="flex-row">
              <View className="flex-row">
                <Text className="text-[40px] font-body mt-[34] text-gray-400">
                  /
                </Text>
                <Text className="text-[40px] font-body mt-[42] text-gray-400">
                  {Math.floor(forecast[0].main.temp_max / 10)}
                </Text>
              </View>
              <Text className="text-[32px] font-body mt-[44] text-gray-400">
                &#176;
              </Text>
            </View>
          </View>
          <Text className="mt-[-20px] font-body text-gray-400">
            {forecast[0].weather[0].main}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-center mt-16" style={{ gap: 22 }}>
        <WeatherDetail
          icon={<Feather name="wind" size={24} color="black" />}
          label="Wind"
          value={`${Math.floor(forecast[0]?.wind.speed)} km/h`}
        />
        <WeatherDetail
          icon={<Ionicons name="water" size={24} color="#74ccf4" />}
          label="Humidity"
          value={`${forecast[0]?.main.humidity}%`}
        />
        <WeatherDetail
          icon={<Ionicons name="rainy" size={24} color="#74ccf4" />}
          label="Rain"
          value={`${forecast[0]?.rain ? Math.floor((forecast[0]?.rain['3h'] * 100) / 10) : 0}%`}
        />
      </View>

      <View className="mt-12 px-4 flex" style={{ gap: 22 }}>
        {forecast?.map((f, index) => {
          if (index === 0) return;
          return <WeatherDay key={f.dt} forecast={f} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
});

export default Home;
