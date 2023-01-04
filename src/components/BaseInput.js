const BaseInput = ({ label, placeholder, refValue }) => {
  return (
    <>
      <label className="text-lightest mt-3" htmlFor="answers">
        {label}
      </label>
      <input
        className="newQuestion-input bg-darkest text-lightest rounded-sm p-1 minW1800px:w-[40rem]"
        name="answers"
        id="answers"
        ref={refValue}
        type="text"
        placeholder={placeholder}
        maxLength={25}
        required
      ></input>
    </>
  );
};

export default BaseInput;
