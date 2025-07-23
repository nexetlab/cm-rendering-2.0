import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/gallery.css'; // We'll create this CSS file next

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load images
  useEffect(() => {
    const loadedImages: GalleryImage[] = [];
    for (let i = 1; i <= 24; i++) {
      loadedImages.push({
        id: i,
        src: `/images/${i}.jpeg`,
        alt: `Gallery image ${i}`
      });
    }
    setImages(loadedImages);
  }, []);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Swipe handlers for mobile
  const modalSwipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const gallerySwipeHandlers = useSwipeable({
    onSwipedLeft: () => {},
    onSwipedRight: () => {},
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  if (images.length === 0) {
    return <div className="loading">Loading gallery...</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Photo Gallery</h1>
      <p className="gallery-subtitle">Swipe or click to view</p>
      
      <div {...gallerySwipeHandlers} className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(image, index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div {...modalSwipeHandlers} className="modal-content" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
              
              <button className="nav-button prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
                &lt;
              </button>
              <button className="nav-button next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                &gt;
              </button>
              
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              
              <div className="image-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;