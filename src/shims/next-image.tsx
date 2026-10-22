import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fill, priority, quality, className = "", style, ...rest }, ref) => {
    const combinedStyle: React.CSSProperties = fill
      ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          ...style
        }
      : style || {};

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={className}
        style={combinedStyle}
        {...rest}
      />
    );
  }
);

Image.displayName = "Image";
export default Image;
