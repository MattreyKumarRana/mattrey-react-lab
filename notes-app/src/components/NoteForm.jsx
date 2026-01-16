import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

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

          <SelectInput
            name="priority"
            value={formData.priority}
            label="Priority"
            onChange={handleChange}
            options={[
              {
                value: "High",
                label: "🔴 High",
              },
              {
                value: "Medium",
                label: "🟡 Medium",
              },
              {
                value: "Low",
                label: "🟢 Low",
              },
            ]}
          />

          <SelectInput
            name="category"
            value={formData.category}
            label="Category"
            onChange={handleChange}
            options={[
              {
                value: "Work",
                label: "📂 Work",
              },
              {
                value: "Personal",
                label: "🏡 Personal",
              },
              {
                value: "Ideas",
                label: "💡 Ideas",
              },
            ]}
          />

          <TextAreaInput
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

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
