// app/not-found-layout.js
export default function NotFoundLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  );
}
