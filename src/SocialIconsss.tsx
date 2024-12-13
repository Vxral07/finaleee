import { SocialIconProps } from './types';

export const SocialIcon = ({ src, alt }: SocialIconProps) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
  />
);