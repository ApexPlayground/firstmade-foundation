import { useState } from "react";

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Required for FormSubmit
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "New NGO Registration");

    try {
      const res = await fetch(
        "https://formsubmit.co/firstmadefoundation02@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setSubmitted(true);
        form.reset(); // optional: clear fields
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to submit. Please check your connection.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl min-h-[700px] mx-auto p-10 mt-10 mb-10 bg-white shadow-orange-200 shadow-2xl rounded-xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-orange-600">
          NGO Registration Form
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Please complete all fields to register
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <div className="w-16 h-16 bg-green-100 mx-auto rounded-full flex items-center justify-center mb-4">
            ✅
          </div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Registration Successful!
          </h2>
          <p className="text-green-600">
            Thank you for registering. We will contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="firstname"
              placeholder="First Name"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="lastname"
              placeholder="Last Name"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="address"
              placeholder="Address"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="ageBracket"
              placeholder="Age Bracket"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="contactNumber"
              placeholder="Contact Number"
              type="tel"
              pattern="\d{11}"
              title="Enter 11-digit phone number"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="lga"
              placeholder="LGA"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="town"
              placeholder="Town"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="state"
              placeholder="State"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="nextOfKin"
              placeholder="Next of Kin"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <input
              name="vocation"
              placeholder="Vocation"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <select
              name="isStudent"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <option value="">Are you a student?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              name="isForeigner"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <option value="">Are you a foreigner?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input
              name="country"
              placeholder="Country (if foreigner)"
              className="md:col-span-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-200"
            >
              Submit Registration
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
