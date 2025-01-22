// import React from "react";
// import ReactDOM from "react-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup"

// // const validate = values => {
// //   const errors = {};

// //   if(!values.firstName){
// //     errors.firstName = 'Required';
// //   }
// //   else if(values.firstName.length > 15){
// //     errors.firstName = 'Must be 15 characters or less';
// //   }

// //   if (!values.lastName) {
// //     errors.lastName = 'Required';
// //   } else if (values.lastName.length > 20) {
// //     errors.lastName = 'Must be 20 characters or less';
// //   }

// //   if (!values.email) {
// //     errors.email = 'Required';
// //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// //     errors.email = 'Invalid email address';
// //   }

// //   return errors;

// // }

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: { 
//       firstName: " ",
//       lastName: " ",
//       email: " ",
//        },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//       lastName: Yup.string()
//       .max(20, "Must be 20 characters or less")
//       .required("Required"),
//       email: Yup.string()
//       .email("Invalid email address")
//       .required("Required")
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     }
//   });

//   return (
//     <form className="Login-form" onSubmit={formik.handleSubmit}>
      
//       <label htmlFor="firstName">First Name</label>
//       <input 
//         id="firstName"
//         name="firstName"
//         type="text"
//         {...formik.getFieldProps("firstName")} 
//         />
//       {formik.touched.firstName && formik.errors.firstName ? <div className="error-display">{formik.errors.firstName}</div> : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input 
//         id="lastName"
//         name="lastName"
//         type="text"
//         {...formik.getFieldProps("lastName")}
//         />
//       {formik.touched.lastName && formik.errors.lastName ? <div className="error-display">{formik.errors.lastName}</div> : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         {...formik.getFieldProps("email")}
//       />
//       {formik.touched.email && formik.errors.email ? <div className="error-display">{formik.errors.email}</div> : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm;

// // function App() {
// //   return <SignupForm />;
// // }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);


import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // call handleNavigate and pass input filed data
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login-container">
            <div className="login-form">
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;