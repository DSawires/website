import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuroraBackground } from "@/components/aurora-background";
import { motion } from "framer-motion";
import React from 'react';
import DefaultLayout from '@/layouts/default';

export default function MyComponent() {
    const images: string[] = ["/files/image-01.jpg", "/files/image-02.jpg", "/files/image-03.jpg", "/files/image-04.jpg", "/files/image-05.jpg", "/files/image-06.jpg", "/files/image-07.jpg", "/files/image-08.jpg", "/files/image-09.jpg", "/files/image-11.jpg", "/files/image-10.jpg", "/files/image-12.jpg"]; // Replace with your array of images

    return (
        <DefaultLayout>
        <AuroraBackground>
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
        <div className="fixed top-20 left-5 w-full h-[calc(100%-5rem)] overflow-auto grid grid-cols-4">
            <PhotoProvider>
                    {images.map((item, index) => (
                        <PhotoView key={index} src={item}>
                            <img src={item} alt="" style={{ maxWidth: '92%', maxHeight: '92%', padding: '10px'}}/>
                        </PhotoView>
                    ))}
            </PhotoProvider>
        </div>
        </motion.div>
		</AuroraBackground>
        </DefaultLayout>
    );
}