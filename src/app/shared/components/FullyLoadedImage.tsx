"use client";
import React, {useState} from 'react';
import Image, {ImageProps, StaticImageData} from "next/image";
import {StaticRequire} from "next/dist/shared/lib/get-img-props";

/**
 * FullyLoadedImage component is designed to manage the loading state of an image.
 *
 * This component sets the image's opacity to 0 while it is loading and transitions to full opacity once loading is complete.
 *
 * **Important Note:**
 * The current implementation relies on the `onLoad` event of the `<Image>` component from Next.js to determine when the image has fully loaded.
 * Due to the dependency on the `main.js` bundle, the image's full visibility might be delayed until the entire JavaScript bundle is loaded and executed.
 *
 * This is a known issue where the component cannot fully ensure image visibility immediately after the image itself is loaded,
 * as it still waits for the JavaScript bundle to complete loading. Resolving this issue would require changes to how and when JavaScript is executed,
 * which is not addressed in this component.
 *
 * @param {ImageProps} props - Props to be passed to the Next.js <Image> component.
 * @returns JSX.Element
 */
type FullyLoadedImageProps = {
    src:string | StaticRequire | StaticImageData,
    alt:string,
    width?:number,
    height?:number,
    fill?:boolean
}

const FullyLoadedImage = ({width, fill, src, alt, height}: FullyLoadedImageProps) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <Image src={src} alt={alt} width={width} height={height} fill={fill} priority={true} className={`${isLoading ? 'opacity-0' : 'opacity-100 '} image-transition`} onLoad={() => setIsLoading(false)}/>
    );
};

export default FullyLoadedImage;