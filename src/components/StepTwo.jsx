const StepTwo = ({ name, email, password, isSubmitted, setIsSubmitted }) => {
  return (
    <div
      className={`w-1/4 flex flex-col gap-8 items-center ${
        isSubmitted ? "" : "hidden"
      }`}
    >
      <h1 className="font-bold text-3xl">Results</h1>
      <div className=" w-full bg-slate-100 p-6 divide-y-8 divide-slate-100">
        <h4>Name : {name}</h4>
        <h4>Email : {email}</h4>
        <h4>Password : {password}</h4>
      </div>
      <button
        className=" bg-indigo-600 text-white w-full p-2 rounded mt-3 cursor-pointer hover:bg-indigo-700"
        onClick={() => setIsSubmitted(false)}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
