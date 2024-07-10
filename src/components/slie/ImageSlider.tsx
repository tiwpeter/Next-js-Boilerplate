import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from 'next/image';

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    //adjust smoot
    //คุณต้องใช้ transform ใน CSS ในการเลื่อนรูปภาพให้สามารถไปในทิศทางต่างๆ
    <div className="image-slider-cop">
      {/*width:"100%",height:"100%",  */}
     <div style={{display:"flex",overflow: "hidden" }}>
        
      {imageUrls.map(url => (
          
        <Image
        key={url}
        src={url}
        className="img-slieder-img"
        // translate slie sm
        style={{ translate: `${  -100 * imageIndex}%`}}
        />

      ))}
     </div>
     
      
      
      <button onClick={showPrevImage}
      className="btn-slider" style={{left:0}}><ArrowBigLeft /></button>
      <button onClick={showNextImage} 
      className="btn-slider"style={{right:0}}><ArrowBigRight /></button>
    </div>
  );
}
