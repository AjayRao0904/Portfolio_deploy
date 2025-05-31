import React from 'react';

const photos = [
  '/media/photos/football_portfolio.jpg',
  '/media/photos/surfing_portfolio.jpg',
  '/media/photos/trekking_portfolio.jpg',
];

const videos = [
  '/media/videos/drums_portfolio.mp4',
  '/media/videos/skiing_porfolio.mp4',
];

export const Hobbies = () => (
  <section id="hobbies" className="py-20 min-h-screen bg-black text-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">My Hobbies</h2>
      <h3 className="text-2xl font-semibold mb-4">Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {photos.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden shadow-lg bg-gray-800 aspect-[16/9] flex items-center justify-center">
            <img src={src} alt={`Hobby ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mb-4">Videos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {videos.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden shadow-lg bg-gray-800 aspect-[16/9] flex items-center justify-center">
            <video src={src} controls className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
); 