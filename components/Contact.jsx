import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fce50e04-c2c4-4469-8cdf-a7fdf9538e42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      const name = formData.get("name");
      setResult(
        `ขอบคุณคุณ ${name} ที่ติดต่อมา! ผมจะรีบติดต่อกลับโดยเร็วที่สุดครับ👍`
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 
             bg-linear-to-b 
             from-transparent via-blue-100/50 to-transparent 
             dark:via-gray-800/50"
    >
      <h4 className="text-center mb-2 text-lg font-sans">Connect With Me</h4>
      <h2 className="text-center text-5xl font-sans">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please don't hesitate to reach out to me.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <Input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-6 outline-none 
                   border-[0.5px] border-gray-400 dark:border-gray-600 
                   rounded-md 
                   bg-white dark:bg-gray-900 
                   text-gray-800 dark:text-gray-200"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-6 outline-none 
                   border-[0.5px] border-gray-400 dark:border-gray-600 
                   rounded-md 
                   bg-white dark:bg-gray-900 
                   text-gray-800 dark:text-gray-200"
          />
        </div>
        <Textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-6 outline-none 
                 border-[0.5px] border-gray-400 dark:border-gray-600 
                 rounded-md 
                 bg-white dark:bg-gray-900 
                 text-gray-800 dark:text-white
                 mb-6"
        />

        <button
          type="submit"
          className="py-3 px-40 w-max flex items-center justify-center gap-2 
                 border border-gray-700 dark:border-gray-200 
                 text-gray-700 dark:text-gray-200 
                 rounded-full mx-auto 
                 hover:bg-gray-100 dark:hover:bg-gray-800 
                 hover:text-black dark:hover:text-white 
                 transition-all duration-300"
        >
          Submit now
          <SendHorizontal />
        </button>

        <p className="my-6 text-center text-gray-700 dark:text-gray-300">
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
