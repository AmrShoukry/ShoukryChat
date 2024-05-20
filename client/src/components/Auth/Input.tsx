import { useState } from 'react';

const Input = ({ name, value, type }) => {
  const [isEmptyName, setIsEmptyName] = useState(true);

  function handleLabel(e, setEmpty) {
    if (e.target.value === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }

  return (
    <div className="relative mt-12">
      <label
        htmlFor={name}
        className={`absolute opacity-60 ${
          isEmptyName
            ? 'top-[14px] left-[16px]'
            : '-top-[24px] left-[4px] text-sm'
        }`}>
        {value}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="py-[12px] px-[16px] shadow-md  w-full focus:outline-none rounded-xl bg-theme"
        onInput={(e) => handleLabel(e, setIsEmptyName)}
      />
    </div>
  );
};

export default Input;

