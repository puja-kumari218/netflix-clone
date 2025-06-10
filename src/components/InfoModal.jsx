import React, { useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "../hooks/useInfoModal";
import useMovie from "../hooks/useMovie";
import useFavorites from "../hooks/useFavorites";
import { motion, AnimatePresence } from "framer-motion";

const InfoModal = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);
  const {
    data: favoritesMovies,
    deleteFavorite,
    updateFavorite,
  } = useFavorites();

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible || !movieId) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="z-50 transition duration-300 bg-black/90 backdrop-blur-sm flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-auto mx-auto max-w-3xl rounded-xl overflow-hidden"
        >
          <div
            className={`${
              isVisible ? "scale-100" : "scale-0"
            } transform duration-300 relative flex-auto bg-gradient-to-b from-zinc-900 to-black drop-shadow-2xl`}
          >
            {/* Video Section */}
            <div className="relative h-96">
              <video
                className="w-full brightness-[60%] object-cover h-full"
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}
                playsInline
              />
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center transition-all duration-300"
              >
                <IoCloseOutline className="text-white" size={20} />
              </motion.button>

              {/* Title and Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {data?.title}
                </h2>
                <div className="flex flex-row gap-4 items-center">
                  <PlayButton movieId={data?.id} />
                  <FavoriteButton
                    movieId={data?.id}
                    data={favoritesMovies}
                    updateFavorite={updateFavorite}
                    deleteFavorite={deleteFavorite}
                  />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="px-8 py-6 space-y-4">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm">
                <div className="px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30">
                  <span className="text-green-400 font-semibold">New</span>
                </div>
                {data?.duration && (
                  <span className="text-white/80">{data.duration}</span>
                )}
                {data?.genre && (
                  <span className="text-white/80">{data.genre}</span>
                )}
              </div>

              {/* Description */}
              {data?.description && (
                <p className="text-white/90 text-sm leading-relaxed">
                  {data.description}
                </p>
              )}

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <h3 className="text-white/60 text-sm mb-2">Cast</h3>
                  <p className="text-white/90 text-sm">John Doe, Jane Smith</p>
                </div>
                {data?.genre && (
                  <div>
                    <h3 className="text-white/60 text-sm mb-2">Genres</h3>
                    <p className="text-white/90 text-sm">{data.genre}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoModal;