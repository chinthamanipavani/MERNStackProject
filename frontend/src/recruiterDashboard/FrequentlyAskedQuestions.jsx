import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AskedImage from "../images/landing2.jpg";

const faqs = [
  {
    question: "How do recruiters contact job seekers?",
    answer:
      "Recruiters can contact job seekers via the registered email or phone number after shortlisting suitable candidates.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Absolutely. We use advanced encryption and security protocols to ensure that your data is safe and never misused.",
  },
  {
    question: "Can I edit or delete my account details?",
    answer:
      "Yes, you can update or delete your account details from your profile settings page after logging in.",
  },
  {
    question: "What type of jobs are listed on your platform?",
    answer:
      "We list full-time, part-time, remote, internship, and freelance job opportunities across various industries.",
  },
];

const FrequencyAskedQuestions = () => {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const imageRef = useRef(null);
  const faqRef = useRef(null);

  const [imageVisible, setImageVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setImageVisible(false);
    setFaqVisible(false);

    const options = { threshold: 0.5 };

    const imageObserver = new IntersectionObserver(([entry]) => {
      setImageVisible(entry.isIntersecting);
    }, options);

    const faqObserver = new IntersectionObserver(([entry]) => {
      setFaqVisible(entry.isIntersecting);
    }, options);

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (faqRef.current) faqObserver.unobserve(faqRef.current);
    };
  }, [location.key]); // re-trigger animation on page revisit

  return (
    <div className="container my-5 px-3 px-md-5">
      <h2 className="text-center mb-5 fw-bold text-primary display-5">
        📘 Frequently Asked Questions
      </h2>

      <div className="row align-items-center">
        <div
          className="col-md-5 mb-4 text-center"
          ref={imageRef}
          style={{
            transition: "all 1s ease",
            transform: imageVisible ? "scale(1)" : "scale(0.8) rotate(-10deg)",
            opacity: imageVisible ? 1 : 0,
          }}
        >
          <img
            src={AskedImage}
            alt="FAQs"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          className="col-md-7"
          ref={faqRef}
          style={{
            transition: "all 1s ease",
            transform: faqVisible ? "translateY(0)" : "translateY(40px)",
            opacity: faqVisible ? 1 : 0,
          }}
        >
          <div className="accordion" id="faqAccordion">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="accordion-item mb-3 border rounded shadow-sm"
                style={{ backgroundColor: "#f9f9ff" }}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      openIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAnswer(index)}
                  >
                    ❓ {item.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openIndex === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-secondary">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyAskedQuestions;
