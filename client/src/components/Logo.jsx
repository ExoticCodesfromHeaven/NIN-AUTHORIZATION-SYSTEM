export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };
  return (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-glow`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-1/2 w-1/2 text-white">
        <path
          d="M12 2L4 6V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6L12 2Z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M12 2L4 6V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.5L11 14.5L15.5 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
