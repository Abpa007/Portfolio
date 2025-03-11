import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
    name:data.name,
    email:data.email,
    message:data.message
  }
  try {
    await axios.post('https://getform.io/f/bgdpvyga', userInfo)
    toast.success("Your Message has been sent.......")
    reset();
  } catch (error) {
    console.log(error)
    toast.error("Something Went Wrong")
    
  }
}

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
        Contact Me
      </h1>
      <p className="text-center text-lg text-gray-600">
        Feel free to reach out by filling the form below
      </p>
      <div className="flex flex-col items-center justify-center mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          
          className="text-lg bg-white shadow-xl w-96 px-10 py-8 rounded-2xl border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Send Your Message
          </h2>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow-md rounded-lg border py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              id="name"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              className="shadow-md rounded-lg border py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="shadow-md rounded-lg border py-2 px-4 text-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              placeholder="Write your message here..."
              name="message"
              id="message"
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
