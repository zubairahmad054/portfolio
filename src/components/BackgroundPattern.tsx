import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-neutral/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 40V.5H40" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        <svg x="50%" y="100%" className="overflow-visible fill-neutral/10">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/90 to-primary/80" />
    </div>
  );
};

export default BackgroundPattern;