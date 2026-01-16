const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semifold">
        {label}
      </label>
      <input
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        type="text"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
