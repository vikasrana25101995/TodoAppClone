import * as Yup from "yup";
export const constants = {
        SignInSchema: Yup.object().shape({
          email: Yup.string().email("Invalid email").required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .required("This field is required")
            .min(8, "Password must be 8 or more characters")
            .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password should contain at least one uppercase and lowercase character")
            .matches(/\d/, "Password should contain at least one number")
            .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        }),
    TITLE: "Sign Up",
    PLACEHOLDER_EMAIL: "Enter your email...",
    PLACEHOLDER_PWD: "Enter your password...",
    EMAIL_LABEL: "Email",
    PWD_LABEL: "Password",
    BUTTON_TEXT_SIGNUP: "Sign up with Email",

  };
  