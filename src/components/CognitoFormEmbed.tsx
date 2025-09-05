'use client';

import { useEffect, useRef } from 'react';

type CognitoFormEmbedProps = {
  dataKey: string;
  formId: number | string;
  className?: string;
  iframeTitle?: string;
};

export default function CognitoFormEmbed({ dataKey, formId, className, iframeTitle }: CognitoFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous content before injecting
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.async = true;
    script.setAttribute('data-key', dataKey);
    script.setAttribute('data-form', String(formId));

    const ensureIframeAccessibility = (root: HTMLElement) => {
      const iframe = root.querySelector('iframe');
      if (iframe) {
        const desiredTitle = iframeTitle || 'Contact form';
        if (!iframe.getAttribute('title')) {
          iframe.setAttribute('title', desiredTitle);
        }
        iframe.setAttribute('aria-label', desiredTitle);
      }
    };

    // Observe for injected iframe and set accessible title
    const observer = new MutationObserver(() => {
      if (!container) return;
      ensureIframeAccessibility(container);
    });

    observer.observe(container, { childList: true, subtree: true });

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
      observer.disconnect();
    };
  }, [dataKey, formId, iframeTitle]);

  return (
    <div ref={containerRef} className={className} />
  );
}


