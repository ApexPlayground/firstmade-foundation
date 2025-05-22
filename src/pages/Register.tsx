import { useState, useEffect } from "react";

type FormFields = {
  firstname: string;
  lastname: string;
  address: string;
  ageBracket: string;
  contactNumber: string;
  lga: string;
  town: string;
  state: string;
  nextOfKin: string;
  vocation: string;
  isStudent: string;
  isForeigner: string;
  country: string;
};

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormFields>({
    firstname: "",
    lastname: "",
    address: "",
    ageBracket: "",
    contactNumber: "",
    lga: "",
    town: "",
    state: "",
    nextOfKin: "",
    vocation: "",
    isStudent: "",
    isForeigner: "",
    country: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({});
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    validateForm();
  }, [form]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormFields, string>> = {};
    const phonePattern = /^\d{11}$/;

    if (!form.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!form.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.ageBracket)
      newErrors.ageBracket = "Please select your age group.";
    if (!phonePattern.test(form.contactNumber))
      newErrors.contactNumber = "Phone number must be 11 digits.";
    if (!form.lga.trim()) newErrors.lga = "LGA is required.";
    if (!form.town.trim()) newErrors.town = "Town is required.";
    if (!form.state.trim()) newErrors.state = "State is required.";
    if (!form.nextOfKin.trim())
      newErrors.nextOfKin = "Next of kin is required.";
    if (!form.vocation.trim()) newErrors.vocation = "Occupation is required.";
    if (!form.isStudent)
      newErrors.isStudent = "Please select if you're a student.";
    if (!form.isForeigner)
      newErrors.isForeigner = "Please select if you're a foreigner.";
    if (form.isForeigner === "Yes" && !form.country.trim())
      newErrors.country = "Country is required for foreigners.";

    setErrors(newErrors);
    setCanSubmit(Object.keys(newErrors).length === 0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    const sheetPayload = {
      data: [
        {
          "First Name": form.firstname,
          "Last Name": form.lastname,
          Address: form.address,
          "Age Group": form.ageBracket,
          "Phone Number": form.contactNumber,
          "Local Government Area": form.lga,
          Town: form.town,
          State: form.state,
          "Next of Kin": form.nextOfKin,
          Occupation: form.vocation,
          "Are you a student?": form.isStudent,
          "Are you a foreigner?": form.isForeigner,
          "Country of Origin": form.isForeigner === "Yes" ? form.country : "",
        },
      ],
    };

    try {
      const res = await fetch("https://sheetdb.io/api/v1/gpb2xb3uudz19", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetPayload),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({
          firstname: "",
          lastname: "",
          address: "",
          ageBracket: "",
          contactNumber: "",
          lga: "",
          town: "",
          state: "",
          nextOfKin: "",
          vocation: "",
          isStudent: "",
          isForeigner: "",
          country: "",
        });
      } else {
        alert("Something went wrong while saving to Google Sheets.");
      }
    } catch (err) {
      alert("Submission failed. Please check your connection.");
      console.error(err);
    }
  };

  const inputFields: (keyof FormFields)[] = [
    "firstname",
    "lastname",
    "address",
    "contactNumber",
    "lga",
    "town",
    "state",
    "nextOfKin",
    "vocation",
  ];

  const placeholders: Record<keyof FormFields, string> = {
    firstname: "Your first name",
    lastname: "Your last name",
    address: "Full address (house number, street, area)",
    ageBracket: "",
    contactNumber: "Phone number (11 digits)",
    lga: "Your Local Government Area (LGA)",
    town: "Town or village",
    state: "State of origin",
    nextOfKin: "Full name of your next of kin",
    vocation: "Your occupation or skill (e.g. tailoring, farming)",
    isStudent: "",
    isForeigner: "",
    country: "Country of origin (if not Nigerian)",
  };

  return (
    <div className="max-w-7xl min-h-[700px] mx-auto p-10 mt-10 mb-10 bg-white shadow-orange-200 shadow-2xl rounded-xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-orange-600">
          Firstmade Foundation Registration Form
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Please fill out each field carefully. All information is required.
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
            {inputFields.map((name) => (
              <div key={name}>
                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholders[name]}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                  required
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            {/* Age group dropdown */}
            <div>
              <select
                name="ageBracket"
                value={form.ageBracket}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                required
              >
                <option value="">Select your age group</option>
                <option value="Under 18">Under 18</option>
                <option value="18–25">18–25</option>
                <option value="26–35">26–35</option>
                <option value="36–45">36–45</option>
                <option value="46–60">46–60</option>
                <option value="Over 60">Over 60</option>
              </select>
              {errors.ageBracket && (
                <p className="text-red-500 text-sm mt-1">{errors.ageBracket}</p>
              )}
            </div>

            {/* Student status */}
            <div>
              <select
                name="isStudent"
                value={form.isStudent}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <option value="">Are you a student?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.isStudent && (
                <p className="text-red-500 text-sm mt-1">{errors.isStudent}</p>
              )}
            </div>

            {/* Foreigner status */}
            <div>
              <select
                name="isForeigner"
                value={form.isForeigner}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <option value="">Are you a foreigner?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.isForeigner && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.isForeigner}
                </p>
              )}
            </div>

            {/* Country field only if foreigner */}
            {form.isForeigner === "Yes" && (
              <div className="md:col-span-2">
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder={placeholders.country}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                  required
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
            )}
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={!canSubmit}
              className={`${
                canSubmit
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-orange-300 cursor-not-allowed"
              } text-white px-8 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-200`}
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
