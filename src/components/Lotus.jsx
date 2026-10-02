export function Lotus({ className = 'w-8 h-8' }) {
  return (
    <img
      src="/logo.png"
      alt="Saarthii"
      className={className}
    />
  );
}

// Large decorative lotus watermark
export function LotusWatermark({ className = '' }) {
  return (
    <Lotus className={className} />
  );
}
