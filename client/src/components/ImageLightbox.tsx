import { motion } from "framer-motion";

export type ImageType = {
  src: string;
  alt: string;
  caption?: string;
};

interface ImageLightboxProps {
  image: ImageType | null;
  onClose: () => void;
}

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition-colors z-10"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <p className="text-white font-mono text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageLightbox;