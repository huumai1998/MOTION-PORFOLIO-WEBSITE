import { Footer } from "flowbite-react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";
export const Contact = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and modern websites.",
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications.",
    },
    {
      title: "Graphic Design",
      description: "Designing visually appealing graphics.",
    },
    {
      title: "E-commerce Solutions",
      description: "Building e-commerce platforms and solutions.",
    },
    {
      title: "Cloud Services",
      description: "Offering cloud-based services and solutions.",
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility on search engines.",
    },
  ];

  return (
    <div className="bg-[#141414] text-white h-[90%] flex flex-col items-center justify-center p-5">
      <div className="w-full max-screen bg-zinc-900 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Logo and Contact Icons */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-6">Contact Me</h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600" size={30} />
                <p>+1 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600" size={30} />
                <p>contact@company.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaFacebookSquare className="text-blue-600" size={30} />
                <p>@YourCompany</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaInstagram className="text-blue-600" size={30} />
                <p>@YourCompany</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-4">Services</h2>
            <div className="space-y-0 flex items-center w-full">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div>
                    <h3 className="text-md">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <footer className="rounded-lg shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            <Footer.Copyright
              by=" Duy Truong. All Rights Reserved."
              year={new Date().getFullYear()}
              className="text-white"
            />{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};
