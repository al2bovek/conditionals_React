export const Button = ({ status, setStatus, style = "" }) => {
    return (
        <button
            className={`text-2xl px-8 py-4 text-white rounded-2xl lg:w-[25%] md:w-[35%] max-sm:w-[90%] m-auto  ${style}`}
            onClick={() => setStatus(status => !status)}
        // onClick={() => setStatus(!status)} incorrect

        >
            {status ? "Log Out" : "Log In"}
        </button>
    );
};
