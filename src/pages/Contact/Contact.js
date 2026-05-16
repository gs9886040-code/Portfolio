import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  //handle submit button
  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("Please Provide all fields");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
          setname("");
          setEmail("");
          setMsg("");
          setIsSending(false);
        },
        (error) => {
          toast.error(error.text || "Failed to send message.");
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.div initial={{ rotate: 90, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="http://www.linkedin.com/in/gopinath-m-2b28462a4" target="_blank" rel="noreferrer">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/gs9886040-code?tab=projects" target="_blank" rel="noreferrer">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100071053155789" target="_blank" rel="noreferrer">
                          <BsFacebook color="blue" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>
                  </div>
                  <form ref={form} onSubmit={sendEmail} className="row px-3 mt-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                    <button className="button" type="submit" disabled={isSending}>
                      {isSending ? "SENDING..." : "SEND MESSAGE"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;