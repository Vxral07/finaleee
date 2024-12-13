import * as React from "react";
import { ImageCard } from "./ImageCard";
import { QRCode } from "./QRCode";

const imageData = [
  {
    id: 1,
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fe204eb90320f008fc86baa684bf781b3ad823c2a6685ee785f6fa0a7a139a9?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    alt: "Play Store",
  },
  {
    id: 2,
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d770c2409a95d4de5c7febe348f756d78b9891b6c048e758877d8034bfa0258?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    alt: "App Store",
  },
  {
    id: 3,
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5dfe62b21a3cd922442aa7ca269ef01f76f81150bf86b67e9264b30442c82484?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    alt: "QR Code",
  },
];

export const ImageCardContainer: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-16 bg-black"
    >
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-[900px]">
        {/* Left Section: Play Store & App Store */}
        <div
          className="flex flex-col items-center justify-center p-16 rounded-lg"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 33, 51, 0.9) 20%, transparent 90%)",
            width: "400px",
            height: "400px",
          }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Available on</h2>
          <div className="flex gap-6">
            {imageData.slice(0, 2).map((image) => (
              <ImageCard key={image.id} imageSrc={image.src} imageAlt={image.alt} />
            ))}
          </div>
        </div>

        {/* Right Section: QR Code */}
        <div className="flex flex-col items-center lg:mt-0 mt-8">
          <QRCode imageSrc={imageData[2].src} imageAlt={imageData[2].alt} />
          <p className="mt-4 text-white text-sm">Scan QR code</p>
        </div>
      </div>
    </div>
  );
};
