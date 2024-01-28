import { useState } from 'react';
import './styles/style.scss';
import AddImgFormComp from './components/AddImgFormComp';
import FooterComp from './components/FooterComp';
import GalleryComp from './components/GalleryComp';
import HeaderComp from './components/HeaderComp';
import { Image, Images } from './types';

function App() {
  const [images, setImages] = useState<Images>([
    {
      id: '001',
      title: 'Beach Art',
      imgAlt: "beach view art",
      imgLink: 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000',
    },
    {
      id: '002',
      title: 'Anime Ship',
      imgAlt: "straw hat's ship sailing",
      imgLink: 'https://free4kwallpapers.com/uploads/originals/2022/03/28/one-piece-for-desktop-thousand-sunny-ship-ocean-clouds-artwork-wallpaper.jpg',
    }
  ])

  const handleRemoveImg = (imgId: string) => {
    setImages(current => current.filter(image => {
      return image.id !== imgId
    }))
  }

  const handleAddImg = (newImg: Image) => {
    setImages(prevImages => [
      ...prevImages,
      {
        id: newImg.id,
        title: newImg.title,
        imgAlt: newImg.imgAlt,
        imgLink: newImg.imgLink
      }
    ])   
  }
 

  return (
    <div className="App container">
      <HeaderComp />
      <AddImgFormComp handleAddImg={handleAddImg} />
      <GalleryComp images={images} handleRemoveImg={handleRemoveImg} />
      <FooterComp />
    </div>
  );
}

export default App;
