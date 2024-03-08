import { motion } from "framer-motion";

const EmailVerify = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className=" absolute z-10 top-5"
      >
        <div role="alert" className="alert shadow-lg w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Welcome to Advisoropedia!🎉</h3>
            <div className="text-xs">Please Verify your mail</div>
          </div>
          <button className="btn btn-sm bg-[#cb4154] text-white hover:text-black">
            See
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailVerify;