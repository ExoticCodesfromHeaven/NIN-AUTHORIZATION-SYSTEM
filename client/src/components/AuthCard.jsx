function AuthCard({ title, children }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {title}
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Secure NIN Authentication
        </p>

        {children}
      </div>
    </div>
  );
}

export default AuthCard;