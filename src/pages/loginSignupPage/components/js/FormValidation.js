const FormValidation = ({ param, paramValue }) => {
  if (param === "name") {
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(paramValue))
      return { result: true, message: "Please Enter Only Alphabets In Name" };
  } else if (param === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(paramValue))
      return { result: true, message: "Please Enter Valid Email" };
  } else if (param === "userName") {
    const userNameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!userNameRegex.test(paramValue))
      return {
        result: true,
        message: "You can only use A-Z, a-z, 0-9, _, - in your user name",
      };
  } else {
    if (paramValue.length < 8)
      return {
        result: true,
        message: "Password should be at least 8 characters.",
      };

    const lower_case = /[a-z]/;
    if (!lower_case.test(paramValue))
      return {
        result: true,
        message: "Password should contain at least 1 lower case [a-z].",
      };

    const upper_case = /[A-Z]/;
    if (!upper_case.test(paramValue))
      return {
        result: true,
        message: "Password should contain at least 1 upper case [A-Z].",
      };

    const digits = /[0-9]/;
    if (!digits.test(paramValue))
      return {
        result: true,
        message: "Password should contain at least 1 digit [0-9].",
      };
  }

  return { result: false };
};

export default FormValidation;
