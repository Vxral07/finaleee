import { useState } from 'react';

interface BlurImageProps {
  src: string;
  className?: string;  // This is optional
  alt?: string;        // This is also optional
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      className={`transition duration-300 ${isLoading ? 'blur-sm' : 'blur-0'} ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt || 'Background of a beautiful view'}
      {...rest}
    />
  );
};
