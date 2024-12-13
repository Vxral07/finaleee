import * as React from 'react';
import { LearnMoreButtonProps } from '@/types';

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ onClick }) => (
  <div 
    className="flex gap-2.5 mt-4 max-w-full font-semibold leading-tight w-[125px]"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    <div className="grow">Learn more</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a0215ca625a58b9fa96967a1832ad4d04ff4bccf28938ffb6262f44496f579b?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
      className="object-contain shrink-0 my-auto aspect-[2.87] w-[23px]"
      alt=""
    />
  </div>
);