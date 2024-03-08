import { useNavigate } from "react-router-dom";

const SignUpBox = () => {
  const navigate = useNavigate();

  return (
    <div className="w-80 h-14 mt-4 rounded-lg bg-base-300 flex items-center justify-center shadow-md">
      <p className="text-gray-400 pr-2">Don't have an account?</p>
      <a
        className="text-[#B43041] font-semibold hover:underline cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </a>
    </div>
  );
};

export default SignUpBox;
