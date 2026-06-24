function Input(props) {
    return (
        <input
            {...props}
            className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );
}

export default Input;