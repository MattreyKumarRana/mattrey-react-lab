import { useState } from "react";
import TextInput from "./inputs/TextInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      return;
    }

    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes([newNote, ...notes]);

    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  };

  return (
    <>
      <button
        className="w-full bg-gray-100 border border-gray-300
       text-purple-800 py-2 rounded-lg cursor-pointer
       hover:bg-purple-200 hover:border-purple-300 transition mb-4
       "
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {!isFormVisible ? "Add new note ➕" : "Hide Form ❌"}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

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
      )}
    </>
  );
};

export default NoteForm;
