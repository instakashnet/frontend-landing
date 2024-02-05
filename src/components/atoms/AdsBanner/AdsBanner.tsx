"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface AdsBannerProps {
  banners?: Array<{ title: string; imageUrl: string }>;
}

function AdsBanner({ banners = [] }: AdsBannerProps) {
  return (
    <Slide autoplay arrows={false}>
      {banners.map((banner) => (
        <div key={banner.title}>
          <div
            className='flex items-center justify-center w-full min-h-[17rem] bg-contain bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${banner.imageUrl})` }}
          />
        </div>
      ))}
    </Slide>
  );
}

export default AdsBanner;
