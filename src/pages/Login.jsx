import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Topbar from "../Layouts/Topbar";
import Footer from "../Layouts/Footer";
import { useState } from "react";
import Banner from "../assets/cropped-logo-300x300.png";
import { IoIosArrowDown } from "react-icons/io";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="">
      <Topbar />
      <div className="w-full">
        <div className="hidden lg:flex items-center justify-between container px-2 xl:px-0 xl:w-2/3 mx-auto fonted">
          <Link to="/" className="">
            <img src={Banner} alt="" className="w-[180px] object-cover" />
          </Link>
          <div className="flex items-center space-x-2">
            <div className="relative inline-block">
              <button
                onClick={() => navigate("/products")}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-[19px] inline-flex  items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform"
              >
                Product <IoIosArrowDown />
              </button>
              {isOpen && (
                <div
                  className="origin-top-right absolute left-0 mt-[2.5px] min-w-max shadow-lg bg-white border-t-2 border-JmReded z-10"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <Link
                    to="/single-function"
                    className="xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                  >
                    Single Function
                  </Link>
                  <Link
                    to="/mutli-function"
                    className="xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                  >
                    Mutli Function
                  </Link>
                  <Link
                    to="/pantum-color"
                    className="xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                  >
                    Pantum Color
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/where-to-buy"
              className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
            >
              Where to Buy
            </Link>
            <Link
              to="/servicing"
              className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
            >
              Servicing
            </Link>
            <Link
              to="/support"
              className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
            >
              Support
            </Link>
          </div>
          <button
            onClick={() => navigate("/warranty-registration")}
            className="py-3 bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom"
          >
            Register Warranty
          </button>
        </div>
      </div>
      <Form />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Login;


import React, { useState } from "react";
import { CalendarIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ImprovedForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    shopName: "",
    date: new Date(),
    modelNo: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (formData.firstName.trim().length === 0) {
      newErrors.firstName = "First name is required";
    }
    if (formData.lastName.trim().length === 0) {
      newErrors.lastName = "Last name is required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!/^\+254\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be in the format +254xxxxxxxxx";
    }
    if (formData.shopName.trim().length === 0) {
      newErrors.shopName = "Shop name is required";
    }
    if (!formData.modelNo) {
      newErrors.modelNo = "Please select a model number";
    }
    if (!formData.file) {
      newErrors.file = "Please upload a file";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log("Form submitted successfully", formData);
      // Here you would typically send the data to your server
    } else {
      console.error("Form validation failed");
    }
  };

  // Simple function to format date as string
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Simple utility function to conditionally join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="container px-2 mx-auto my-5">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={classNames(errors.firstName && "border-red-500")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={classNames(errors.lastName && "border-red-500")}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={classNames(errors.email && "border-red-500")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+254xxxxxxxxx"
            className={classNames(errors.phone && "border-red-500")}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="shopName">Shop Name</Label>
          <Input
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={handleInputChange}
            className={classNames(errors.shopName && "border-red-500")}
          />
          {errors.shopName && (
            <p className="text-red-500 text-xs">{errors.shopName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={classNames(
                  "w-full justify-start text-left font-normal",
                  !formData.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.date ? (
                  formatDate(formData.date)
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="modelNo">Model Number</Label>
          <Select
            name="modelNo"
            onValueChange={(value) =>
              handleInputChange({ target: { name: "modelNo", value } })
            }
          >
            <SelectTrigger
              className={classNames(errors.modelNo && "border-red-500")}
            >
              <SelectValue placeholder="Select a model number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="M6559NW">M6559NW</SelectItem>
              <SelectItem value="M6509NW">M6509NW</SelectItem>
              <SelectItem value="P2509W">P2509W</SelectItem>
              <SelectItem value="M7100DW">M7100DW</SelectItem>
              <SelectItem value="M6700DW">M6700DW</SelectItem>
              <SelectItem value="BM5100ADW">BM5100ADW</SelectItem>
              <SelectItem value="BM5100FDW">BM5100FDW</SelectItem>
              <SelectItem value="CM1100ADW">CM1100ADW</SelectItem>
              <SelectItem value="CM1100DW">CM1100DW</SelectItem>
            </SelectContent>
          </Select>
          {errors.modelNo && (
            <p className="text-red-500 text-xs">{errors.modelNo}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">Upload File</Label>
          <Input
            id="file"
            name="file"
            type="file"
            onChange={handleFileChange}
            className={classNames(errors.file && "border-red-500")}
          />
          {errors.file && <p className="text-red-500 text-xs">{errors.file}</p>}
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>

        {Object.keys(errors).length > 0 && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">
              Please correct the following errors:
            </strong>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <AlertCircle className="h-6 w-6 text-red-500" />
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ImprovedForm;


<>
  /* From Uiverse.io by iZOXVL */
  <div
    style={{ animation: "x 1s ease-out" }}
    className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
  >
    <h2
      style={{ animation: "appear 2s ease-out" }}
      className="text-center text-4xl font-extrabold text-white"
    >
      Welcome
    </h2>
    <p
      style={{ animation: "appear 3s ease-out" }}
      className="text-center text-gray-200"
    >
      Sign in to your account
    </p>
    <form method="POST" action="#" className="space-y-6">
      <div className="relative">
        <input
          placeholder="john@example.com"
          className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
          required=""
          id="email"
          name="email"
          type="email"
        />
        <label
          className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
          htmlFor="email"
        >
          Email address
        </label>
      </div>
      <div className="relative">
        <input
          placeholder="Password"
          className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
          required=""
          id="password"
          name="password"
          type="password"
        />
        <label
          className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
          htmlFor="password"
        >
          Password
        </label>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-200">
          <input
            className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
            type="checkbox"
          />
          <span className="ml-2">Remember me</span>
        </label>
        <a className="text-sm text-purple-200 hover:underline" href="#">
          Forgot your password?
        </a>
      </div>
      <button
        className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
        type="submit"
      >
        Sign In
      </button>
    </form>
    <div className="text-center text-gray-300">
      Don't have an account?
      <a className="text-purple-300 hover:underline" href="#">
        Sign up
      </a>
    </div>
  </div>
</>
