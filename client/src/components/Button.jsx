function Button({ children }) {
    return (
        <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
            {children}
        </button>
    );
}

export default Button;