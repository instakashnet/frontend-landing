"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface AdsBannerProps {
  banners?: Array<{ title: string; imageUrl: string; link?: string }>;
}

function AdsBanner({ banners = [] }: AdsBannerProps) {
  return (
    <Slide autoplay arrows={false}>
      {banners.map((banner) => (
        <a href={banner.link} className='block' key={banner.title}>
          <div
            className='flex items-center justify-center w-full min-h-[10rem] lg:min-h-[20rem] bg-contain bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${banner.imageUrl})` }}
          />
        </a>
      ))}
    </Slide>
  );
}

export default AdsBanner;
