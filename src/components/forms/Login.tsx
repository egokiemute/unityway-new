"use client";
import React from "react";
import InputField from "../ui/InputField";
import { useFormik } from "formik";
import Button from "../ui/Button";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILogin } from "@/utils/types";
import { loginValidationSchema } from "@/utils/validations/userValidations";
import { FaArrowRight } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const Login = () => {
  // const session = useSession();
  const router = useRouter();
  // console.log(session);

  const formik = useFormik<ILogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        if (res?.status === 200) {
          //  const updatedSession = await getSession();
          //  const route = ro(updatedSession?.user.role);
          toast.success("Login Successful");
          router.push("/");
        } else {
          // console.log(res?.error);
          toast.error(res?.error);
        }
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setSubmitting(false); // End submission
      }
    },
  });

  const handleGoogle = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/", // This will be handled by the redirect callback
      });
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to sign in with Google");
    }
  };

  return (
    <>
      <div className="mt-8">
        <Button
          className="py-3 px-6 text-lg font-twk w-full"
          style="nobg"
          type="button"
          icon={<FcGoogle size={20} />}
          onClick={handleGoogle}
          disabled={formik.isSubmitting}
        >
          <span>Continue with Google</span>
        </Button>
        <Button
          className="py-3 px-6 text-lg font-twk w-full mt-6"
          style="nobg"
          type="button"
          icon={<BsApple className="text-black" size={20} />}
          onClick={handleGoogle}
          disabled={formik.isSubmitting}
        >
          <span>Continue with Apple</span>
        </Button>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="h-[2px] w-32 bg-[#0000001A]"></div>
          <div className="text-sm">Or sign in with</div>
          <div className="h-[2px] w-32 bg-[#0000001A]"></div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-6 mt-12"
        >
          <InputField
            name="email"
            label="Email"
            placeholder="john@fregrioenergies.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />

          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="minimum 8 Characters"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />

          <Button
            type="submit"
            style="primary"
            icon={<FaArrowRight />}
            iconPosition="right"
            className="py-3 px-6 text-lg font-twk w-full"
            loading={formik.isSubmitting}
            disabled={
              formik.isSubmitting || Object.keys(formik.errors).length > 0
            }
          >
            Sign in
          </Button>
        </form>

        {/* <div className="mt-8">
          <p className="text-center">
            Don&apos;t have account with us ?{" "}
            <Link
              href={registerRoute}
              className="font-bold text-text-strong underline underline-offset-2"
            >
              Register
            </Link>{" "}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Login;
