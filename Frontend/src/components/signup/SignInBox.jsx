import { useNavigate } from "react-router-dom";

const SingInBox = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-80 h-11 mt-2 rounded-lg bg-base-300 flex flex-row items-center justify-center">
        <p className="pr-2 text-gray-300">Already have a account?</p>{" "}
        <a
          className="text-[#B43041] font-semibold hover:underline decoration-[#B43041] cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Sign in
        </a>
      </div>
    </>
  );
};

export default SingInBox;