'use client';

import dynamic from 'next/dynamic';

interface MapProps {
  latitude: number;
  longitude: number;
  companyName: string;
  address: string;
}

// Create a dynamic component that only loads on the client side
const DynamicMap = dynamic(() => import('@/app/components/DynamicMap'), {
  ssr: false, // Disable server-side rendering
  loading: () => <div className="w-full h-[600px] bg-gray-200 animate-pulse rounded-lg"></div>,
});

export default function Map(props: MapProps) {
  return <DynamicMap {...props} />;
} 