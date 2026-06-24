export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-sky-100">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0284c7" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
