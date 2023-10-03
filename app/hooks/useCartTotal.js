import { create } from "zustand";

const useCartTotal = create((set) => ({
  totalCart: 0,
  setTotalCart: (total) => set({ totalCart: total }),
}));

export default useCartTotal;
