import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useNavigate } from "react-router-dom";
import useInfoModal from "../hooks/useInfoModal";
import { LuChevronDown } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

const MovieCard = ({ data, movies, deleteFavorite, updateFavorite, isTrending = false }) => {
  const navigate = useNavigate();
  const { openModal } = useInfoModal();
  const [showActionMessage, setShowActionMessage] = useState(false);
  const [actionType, setActionType] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFavoriteAction = async () => {
    try {
      const isFavorite = movies?.find((movie) => movie.id === data?.id);
      setActionType(isFavorite ? 'removed' : 'added');
      setShowActionMessage(true);
      
      if (isFavorite) {
        await deleteFavorite(data?.id);
      } else {
        await updateFavorite(data?.id);
      }
      
      setTimeout(() => setShowActionMessage(false), 2000);
    } catch (error) {
      console.error('Error handling favorite action:', error);
      setShowActionMessage(false);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      navigate(`/watch/${data?.id}`);
    }, 1000);
  };

  if (!data) return null;

  return (
    <div className={`group relative ${isTrending ? 'h-[16vw]' : 'h-[12vw]'} w-full overflow-hidden rounded-lg`}>
      {/* Base Image with Gradient Overlay */}
      <div className="relative h-full w-full">
        <img
          src={data.thumbnailUrl}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          alt={data.title || 'Movie thumbnail'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/90 to-transparent" />
        
        {/* Bottom Gradient Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
          {/* Title and Year */}
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg font-semibold truncate">{data.title}</h3>
            <div className="px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30">
              <span className="text-green-400 text-sm font-medium">2023</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handlePlay}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden"
            >
              <motion.div
                animate={isPlaying ? { 
                  scale: [1, 1.5, 0],
                  opacity: [1, 0.8, 0]
                } : { scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
              />
              <motion.div
                animate={isPlaying ? { 
                  scale: [1, 1.3, 0],
                  opacity: [1, 0.9, 0]
                } : { scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.1
                }}
                className="absolute inset-0 bg-white/20 backdrop-blur-sm"
              />
              <motion.div
                animate={isPlaying ? { 
                  scale: [1, 1.1, 0],
                  opacity: [1, 0.95, 0]
                } : { scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.2
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-red-600/50"
              />
              <BsFillPlayFill className="text-white relative z-10" size={24} />
            </motion.button>

            <motion.button
              onClick={handleFavoriteAction}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
              <FavoriteButton
                movieId={data?.id}
                data={movies}
                deleteFavorite={deleteFavorite}
                updateFavorite={updateFavorite}
              />
            </motion.button>

            <motion.button
              onClick={() => openModal(data?.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/50 hover:border-white transition-all duration-300"
            >
              <LuChevronDown className="text-white" size={20} />
            </motion.button>
          </div>

          {/* Movie Info */}
          <div className="flex items-center gap-4 text-sm text-white/80">
            {data.duration && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {data.duration}
              </span>
            )}
            {data.genre && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                {data.genre}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Message */}
      <AnimatePresence>
        {showActionMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="relative"
            >
              {/* Background Blur Effect */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full" />
              
              {/* Content Container */}
              <div className="relative px-6 py-3 flex items-center gap-3">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    actionType === 'added' ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}
                >
                  {actionType === 'added' ? (
                    <AiOutlineCheck className="text-green-400" size={20} />
                  ) : (
                    <AiOutlinePlus className="text-red-400" size={20} />
                  )}
                </motion.div>

                {/* Text */}
                <motion.p
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-sm font-medium whitespace-nowrap"
                >
                  {actionType === 'added' ? 'Added to My List' : 'Removed from My List'}
                </motion.p>
              </div>

              {/* Border Gradient */}
              <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieCard;