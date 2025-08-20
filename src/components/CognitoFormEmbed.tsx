'use client';

import { useEffect, useRef } from 'react';

type CognitoFormEmbedProps = {
  dataKey: string;
  formId: number | string;
  className?: string;
};

export default function CognitoFormEmbed({ dataKey, formId, className }: CognitoFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous content before injecting
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.async = true;
    script.setAttribute('data-key', dataKey);
    script.setAttribute('data-form', String(formId));

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [dataKey, formId]);

  return (
    <div ref={containerRef} className={className} />
  );
}


