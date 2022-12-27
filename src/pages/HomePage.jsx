import { useContext, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().required("Requierd").email("Please enter a valid email"),
  password: yup.string().required("Required"),
});

const HomePage = () => {
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const userLoginHandler = (values) => {
    login(values.email, values.password, navigate, setError);
  };

  return (
    <div className="h-screen w-screen bg-herro-img bg-center bg-cover flex justify-center items-center">
      <div className="bg-neutral-100 py-4 px-8 w-96">
        <h1 className="text-center text-2xl uppercase">Scoring</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={userLoginHandler}
        >
          <Form className="py-2 grid grid-rows-3 gap-4">
            <Field
              className="py-2 px-4 border-2 outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="მომხმარებლის სახელი"
            />
            <Field
              className="py-2 px-4 border-2 outline-none"
              type="password"
              id="password"
              name="password"
              placeholder="პაროლი"
            />
            <button
              type="submit"
              onClick={userLoginHandler}
              className="bg-neutral-200 font-bold text-gray-600 hover:bg-neutral-300 duration-100"
            >
              შესვლა
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default HomePage;
