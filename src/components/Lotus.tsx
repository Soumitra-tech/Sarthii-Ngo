interface LotusProps {
  className?: string;
}

// Lotus motif — used as the brand icon and decorative watermark
export function Lotus({ className = 'w-8 h-8' }: LotusProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4A62A" />
          <stop offset="100%" stopColor="#8E2F6B" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M32 8 C 28 20, 28 28, 32 34 C 36 28, 36 20, 32 8 Z"
          fill="url(#lotusGrad)"
          opacity="0.95"
        />
        <path
          d="M32 8 C 28 20, 28 28, 32 34 C 36 28, 36 20, 32 8 Z"
          fill="url(#lotusGrad)"
          opacity="0.8"
          transform="rotate(60 32 32)"
        />
        <path
          d="M32 8 C 28 20, 28 28, 32 34 C 36 28, 36 20, 32 8 Z"
          fill="url(#lotusGrad)"
          opacity="0.8"
          transform="rotate(120 32 32)"
        />
        <path
          d="M32 8 C 28 20, 28 28, 32 34 C 36 28, 36 20, 32 8 Z"
          fill="url(#lotusGrad)"
          opacity="0.8"
          transform="rotate(180 32 32)"
        />
        <path
          d="M32 8 C 28 20, 28 28, 32 34 C 36 28, 36 20, 32 8 Z"
          fill="url(#lotusGrad)"
          opacity="0.8"
          transform="rotate(240 32 32)"
        />
        <path
          d="M32 8 C 28 20, 28 28, 32 34 C 36 28, 36 20, 32 8 Z"
          fill="url(#lotusGrad)"
          opacity="0.8"
          transform="rotate(300 32 32)"
        />
        <circle cx="32" cy="34" r="4" fill="#F4A62A" />
      </g>
    </svg>
  );
}

// Large decorative lotus watermark for section backgrounds
export function LotusWatermark({ className = '' }: LotusProps) {
  return (
    <Lotus className={className} />
  );
}
