import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, [window.innerWidth]);

  const templateParams = {
    from_name: formData.from_name,
    email: formData.email,
    message: formData.message,
    phone: formData.phone,
  };

  const onFieldChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async () => {
    await emailjs
      .send(
        "service_e2bzdks",
        "template_mwo1yp8",
        templateParams,
        "h_3JXnvM9eedL6eJL"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          window.location.reload();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="EmailFormContainer">
      {/* <label className="ContactFormLabel"> Full Name </label> */}
      <input
        type="text"
        name="from_name"
        value={formData.from_name}
        onChange={(e) => onFieldChange(e)}
        placeholder="Full Name"
        className="EmailFormInput"
        required
      />
      {/* <label className="ContactFormLabel"> Email </label> */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => onFieldChange(e)}
        placeholder="Email"
        className="EmailFormInput"
        // size={isMobile ? 10 : 50}
        required
      />
      {/* <label className="ContactFormLabel"> Phone </label> */}
      <input
        type="text"
        name="phone"
        value={formData.email}
        onChange={(e) => onFieldChange(e)}
        placeholder="Phone"
        className="EmailFormInput"
        required
      />
      {/* <label className="ContactFormLabel"> Message </label> */}
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => onFieldChange(e)}
        name="message"
        rows={5}
        className="EmailFormInput"
        required
      />
      <button
        type="submit"
        className="EmailFormBtn"
        onClick={() => onFormSubmit()}
      >
        {" "}
        Send{" "}
      </button>
    </div>
  );
};

export default EmailForm;
