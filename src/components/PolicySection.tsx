import * as React from 'react';
import { PolicySectionProps } from '@/types';

export const PolicySection: React.FC<PolicySectionProps> = ({ title, content }) => (
  <div className="mt-8">
    <div className="text-2xl tracking-tight leading-10 text-white">
      {title}
      {content.map((paragraph, index) => (
        <React.Fragment key={index}>
          <br />
          {paragraph}
        </React.Fragment>
      ))}
    </div>
  </div>
);