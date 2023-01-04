import { useState } from "react";

const Dropdown = ({ setLevelValue }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const selectLevel = (e) => {
    const levelInput = document.querySelector(".level-input");
    levelInput.value = e.target.dataset.level;
    setLevelValue(levelInput.value);
    toggleDropdown();
  };

  return (
    <div className="w-[16rem] text-center">
      <div className="dropdown-container w-[16rem]">
        <input
          type="text"
          disabled
          placeholder="Nehézségi szint"
          className="level-input w-full px-[0.9rem] py-[0.5rem] relative z-10 bg-darkest text-lightest rounded-md border-none"
        />
        <i
          onClick={toggleDropdown}
          className={
            (dropdownVisible
              ? "fa-solid fa-angle-up "
              : "fa-solid fa-angle-down ") +
            "btn-dropdown text-[1.2rem] cursor-pointer relative z-10 text-midLight bg-transparent px-[0.5rem] py-[0.4rem] translate-x-[6.8rem] -translate-y-[2.3rem] "
          }
        ></i>

        <div
          onClick={selectLevel}
          className={
            (dropdownVisible
              ? "visible translate-y-0 "
              : "invisible -translate-y-10 ") +
            "dropdown pointer-events-none -mt-8 transition duration-500 bg-white/20 rounded-md flex flex-col text-lightest px-[0.9rem] "
          }
        >
          <p
            data-level="könnyű"
            className="level mb-2 text-left pointer-events-auto cursor-pointer"
          >
            könnyű
          </p>
          <p
            data-level="közepes"
            className="level mb-2 text-left pointer-events-auto cursor-pointer"
          >
            közepes
          </p>
          <p
            data-level="nehéz"
            className="level mb-2 text-left pointer-events-auto cursor-pointer"
          >
            nehéz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
