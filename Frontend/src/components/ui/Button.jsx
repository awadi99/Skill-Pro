 const Button = ({
    children,
    type = "button",
    onClick,
    loading = false,
    disabled = false,
    className = " ",
}) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled || loading}
                className={`bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg text-sm font-medium transition hover:scale-105 ${className}`}>

                {loading ? "Loading..." : children}
            </button>
        </>
    );
};


export default Button;