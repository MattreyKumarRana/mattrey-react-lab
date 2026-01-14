import { useState } from "react";

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semifold">
          Title
        </label>
        <input
          name="title"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          type="text"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block font-semifold">
          Priority
        </label>
        <select
          name="priority"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          type="text"
          onChange={handleChange}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semifold">
          Category
        </label>
        <select
          name="category"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          type="text"
          onChange={handleChange}
        >
          <option value="Work">📂 Work</option>
          <option value="Personal">🏡 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-semifold">
          Description
        </label>
        <textarea
          name="description"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          type="text"
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        className="w-full bg-purple-500 text-white py-2 rounded-lg
       cursor-pointer hover:bg-purple-600"
      >
        Add note
      </button>
    </form>
  );
};

export default NoteForm;
