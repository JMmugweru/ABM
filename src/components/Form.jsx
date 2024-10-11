import { useState } from "react";
import DatePicker from "react-datepicker";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [shopName, setShopName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (!phone.includes("+254")) {
      errors.phone = "Phone number look like this +2547074562310";
    }
    if (!firstName > 0) {
      errors.firstName = "Name is required";
    }
    if (!lastName > 0) {
      errors.lastName = "Name is required";
    }
    if (!shopName > 0) {
      errors.shopName = "Fill this field";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form to server
      console.log("Form submitted successfully");
    } else {
      // Show error messages
      console.error("Form validation failed");
    }
  };
  return (
    <div className="container px-2 mx-auto my-5">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-10 group">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.firstName}
              </p>
            )}
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name *
            </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.lastName}
              </p>
            )}
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name *
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setShopName(e.target.value)}
              value={shopName}
              type="text"
              name="floating_company"
              id="floating_company"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.shopName ? "border-red-500" : ""
              }`}
            />
            {errors.shopName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.shopName}
              </p>
            )}
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of Company / Business
            </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="floating_email"
              id="floating_email"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
            )}
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>
            )}
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (0710505050)
            </label>
          </div>
          <div className="relative z-50 w-full mb-10 group">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of Company / Business
            </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <select className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 custom-select">
              <option value="">Choose Model No</option>
              <option value="M6559NW">M6559NW</option>
              <option value="M6509NW">M6509NW</option>
              <option value="P2509W">P2509W</option>
              <option value="M7100DW">M7100DW</option>
              <option value="M6700DW">M6700DW</option>
              <option value="BM5100ADW">BM5100ADW</option>
              <option value="BM5100FDW">BM5100FDW</option>
              <option value="CM1100ADW">CM1100ADW</option>
              <option value="CM1100DW">CM1100DW</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="file">
            <div className="">
              <span className="bg-[#1abca1] text-white py-3 px-4 rounded">
                Choose File
              </span>
            </div>
            <input type="file" id="file" name="file" className="hidden" />
          </label>
        </div>
        <button type="submit" className="bg-[#17a8e3] py-3 px-6 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
