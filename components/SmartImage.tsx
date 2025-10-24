"use client";

import Image, { ImageProps } from 'next/image';
import { useMemo, useState } from 'react';

type SmartImageProps = Omit<ImageProps, 'src'> & {
    src: string | null | undefined;
    fallbackSeed?: string;
};

export default function SmartImage({ src, alt, fallbackSeed, ...rest }: SmartImageProps) {
    const [failed, setFailed] = useState(false);

    const computedSrc = useMemo(() => {
        if (!failed && src) return src;
        const seed = encodeURIComponent(fallbackSeed || String(alt || 'image'));
        // picsum dynamic placeholder by seed
        return `https://picsum.photos/seed/${seed}/1200/800`;
    }, [failed, src, alt, fallbackSeed]);

    return (
        <Image
            {...rest}
            alt={alt}
            src={computedSrc}
            onError={() => setFailed(true)}
            unoptimized
        />
    );
}


