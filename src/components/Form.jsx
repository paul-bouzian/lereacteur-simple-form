import { useState } from "react";
import StepTwo from "./StepTwo";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div
        className={`w-1/4 flex flex-col gap-16 items-center ${
          isSubmitted ? "hidden" : ""
        }`}
      >
        <h1 className="font-bold text-3xl">Create account</h1>

        <form
          className="w-full flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();

            if (password !== confirmPassword) {
              alert("Passwords do not match");
              return;
            }
            setIsSubmitted(true);
          }}
        >
          <div className=" mb-6 w-full">
            <h4>Name</h4>
            <input
              type="text"
              placeholder="Jean Dupont"
              className={` bg-slate-100 border border-slate-200 p-2 rounded w-full mt-1 ${
                isSubmitted ? "hidden" : ""
              }`}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>

          <div className=" mb-6 w-full">
            <h4>Email</h4>
            <input
              type="email"
              placeholder="jeandupont@gmail.com"
              className=" bg-slate-100 border border-slate-200 p-2 rounded w-full mt-1"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className=" mb-6 w-full">
            <h4>Password</h4>
            <input
              type="password"
              placeholder="xFHyt58U!L"
              className=" bg-slate-100 border border-slate-200 p-2 rounded w-full mt-1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          <div className=" mb-6 w-full">
            <h4>Confirm your password</h4>
            <input
              type="password"
              placeholder="xFHyt58U!L"
              className=" bg-slate-100 border border-slate-200 p-2 rounded w-full mt-1"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
          </div>

          <input
            type="submit"
            value="Register"
            className=" bg-indigo-600 text-white w-full p-2 rounded mt-3 cursor-pointer hover:bg-indigo-700"
          />
        </form>
      </div>

      <StepTwo
        name={name}
        email={email}
        password={password}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  );
};

export default Form;
