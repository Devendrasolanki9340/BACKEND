
import { useForm } from "react-hook-form";
import axios from 'axios';

const App = () => {
  const { register, handleSubmit } = useForm();

  const SubmitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profile_pic", data.profile_pic[0]);

    try {
      const response = await axios.post("http://localhost:3000/user/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Backend response:", response.data);
      alert(response.data.message || "Form submitted successfully!");
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>Upload Profile</h2>
      <form onSubmit={handleSubmit(SubmitHandler)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Name:</label><br />
          <input {...register('name', { required: true })}
            type="text"
            name="name"
            placeholder="Enter your name"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input {...register('email', { required: true })}
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>Profile Picture:</label><br />
          <input {...register('profile_pic', { required: true })}
            type="file"
            name="profile_pic"
            accept="image/*"
          />
        </div>

        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
