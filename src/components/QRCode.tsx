import * as React from "react";

interface QRCodeProps {
  imageSrc: string;
  imageAlt: string;
}

export const QRCode: React.FC<QRCodeProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-[160px] h-[160px]" // QR code size to match image
      />
    </div>
  );
};
