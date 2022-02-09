import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .min(2, "Too Short!")
        .email("must be a valid email")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    confirmPassword: Yup.string()
        .required("Required")
        .test("passwords-match", "Passwords must match", function (value) {
            return this.parent.password === value;
        }),
});

export default SignInSchema;
