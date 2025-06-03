import { create } from 'zustand';

const useInfoModal = create((set) => ({
  movieId: null, // use null instead of undefined for clarity
  isOpen: false,
  openModal: (movieId) => set(() => ({ isOpen: true, movieId })),
  closeModal: () => set(() => ({ isOpen: false, movieId: null })),
}));

export default useInfoModal;
