import Image from "next/image";
import { constants } from "./constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./stylesheets/index.module.scss";

const SignUp: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <div className={styles.header}>
          <Image src="/todoist-logo-vector.png" width={100} height={80} />
        </div>
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h2>{constants.TITLE}</h2>

            <div className="form-container">
              <Formik
                initialValues={initialValues}
                validationSchema={constants.SignInSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <Form className={styles.form}>
                      <div className={styles.form_row}>
                        {/* <label htmlFor="email">{EMAIL_LABEL}</label> */}
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder={constants.PLACEHOLDER_EMAIL}
                          className={`${
                            errors.email && touched.email ? "input-error" : ""
                          } ${styles.inputForm}`}
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                      </div>

                      <div className={styles.form_row}>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          placeholder={constants.PLACEHOLDER_PWD}
                          className={`${
                            errors.password && touched.password
                              ? "input-error"
                              : ""
                          } ${styles.inputForm}`}
                        />
                        {/* <label htmlFor="email">{PWD_LABEL}</label> */}
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="error"
                        />
                      </div>

                      <button
                        type="submit"
                        className={`${
                          dirty && isValid ? "active-btn" : "disabled-btn"
                        }`}
                        disabled={!(dirty && isValid)}
                        style={{ backgroundColor: "#db4c3f" }}
                      >
                        {constants.BUTTON_TEXT_SIGNUP}
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className={styles.rightCol}>
            <Image src="/todoist-signup.png" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
