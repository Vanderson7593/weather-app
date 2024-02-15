import { create } from 'zustand';

import { Coord } from '@/types/weather';

interface CoordsState {
  coords: Coord;
  updateCoords: (coords: Coord) => void;
  clearCoords: () => void;
}

export const useCoordsStore = create<CoordsState>(set => ({
  coords: { lat: 0, lon: 0 },
  updateCoords: (coords: Coord) => set({ coords }),
  clearCoords: () => set({ coords: { lat: 0, lon: 0 } }),
}));
