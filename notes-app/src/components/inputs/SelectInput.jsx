const SelectInput = ({ name, label, value, onChange, options = [] }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semifold">
        {label}
      </label>
      <select
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        type="text"
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
