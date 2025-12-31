import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2dsxklj",
        "template_fntcqpw",
        form.current,
        "bOfdW16Ir7YpLdVGQ"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[15vw]"
    >
      <ToastContainer />

      <div className="w-full max-w-4xl">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            CONTACT
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
            I’d love to hear from you — reach out for any opportunities or questions!
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto w-full max-w-md bg-[#0d081f] p-5 sm:p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-4">
            Connect With Me 🚀
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-sm sm:text-base text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-sm sm:text-base text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-sm sm:text-base text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-sm sm:text-base text-white border border-gray-600 focus:outline-none focus:border-purple-500 resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 text-sm sm:text-base font-semibold text-white rounded-md bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
