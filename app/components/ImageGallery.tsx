'use client';

import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import { useState } from 'react';

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSmallImageClick = (image: any, idx: number) => {
    setBigImage(image);
    setSelectedImage(idx); // Update selectedImage state when a small image is clicked
  };
  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-lg bg-gray-100 ${
              idx === selectedImage
                ? 'border-[3px] border-solid border-blue-500'
                : ''
            }`}
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt={`Main image ${image.name}`}
              // alt='photo'
              className='h-full w-full object-cover object-center cursor-pointer'
              onClick={() => handleSmallImageClick(image, idx)}
            />
          </div>
        ))}
      </div>

      <div className='mb-6 relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
        <Image
          src={urlFor(bigImage).url()}
          alt='Photo'
          width={500}
          height={500}
          className='h-full w-full object-cover object-center'
        />

        <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
          Sale
        </span>
      </div>
    </div>
  );
}
