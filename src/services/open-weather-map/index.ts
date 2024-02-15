import { axiosInstance } from '../api';

import { City, List } from '@/types/weather';

interface IGetForecast {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

type TGetForeCast = (args: {
  lat: number;
  lon: number;
}) => Promise<IGetForecast>;

export const getForecast: TGetForeCast = async ({ lat, lon }) => {
  const { data } = await axiosInstance.get(
    `/2.5/forecast?appid=c847e75b2c4d2d195d5e552d041709d3&lat=${lat}&lon=${lon}`
  );
  return data;
};
