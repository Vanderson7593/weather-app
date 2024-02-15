import { List } from '@/types/weather';

export const parseForecast = (list: List[]): List[] => {
  const data: List[] = [];
  const dates = new Set(list.map(item => item.dt_txt.split(' ')[0]));
  dates.forEach(date =>
    data.push(list.filter(item => item.dt_txt.split(' ')[0] === date)[0])
  );
  return data;
};
