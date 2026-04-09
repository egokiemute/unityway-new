"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import { Loader, MoveRight } from "lucide-react";

// ✅ Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),

  businessEmail: Yup.string()
    .email("Please enter a valid business email")
    .required("Business email is required"),

  customerSize: Yup.string().required("Please select customer size"),

  location: Yup.string().trim().optional(),
});

const DemoForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      businessEmail: "",
      customerSize: "",
      location: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      setLoading(true);
      setSubmitting(true);

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          toast.success(data.message || "Successfully joined waitlist!");
          resetForm();
        } else {
          if (data.field && data.message) {
            setFieldError(data.field, data.message);
            toast.error(data.message);
          } else if (Array.isArray(data.errors)) {
            toast.error(data.errors[0]);
          } else {
            toast.error(data.message || "Failed to join waitlist.");
          }
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        toast.error("Network error. Please try again.");
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-[#F1F8FF] min-h-[500px] mx-auto rounded-[19.02px] w-full max-w-[630px] flex flex-col gap-6 py-[40px] px-[35px]">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-4 w-full">
          {/* Full Name */}
          <InputField
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : null
            }
            required
          />

          {/* Business Email */}
          <InputField
            name="businessEmail"
            label="Business Email"
            type="email"
            placeholder="johndoe@company.com"
            value={formik.values.businessEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.businessEmail && formik.errors.businessEmail
                ? formik.errors.businessEmail
                : null
            }
            required
          />

          {/* Customer Size */}
          <SelectField
            name="customerSize"
            label="Customer Size"
            placeholder="Select customer size"
            options={[
              { value: "1-5", label: "1-5 customers" },
              { value: "6-20", label: "6-20 customers" },
              { value: "21-50", label: "21-50 customers" },
              { value: "51-100", label: "51-100 customers" },
              { value: "100+", label: "100+ customers" },
            ]}
            value={formik.values.customerSize}
            onChange={(value: string) =>
              formik.setFieldValue("customerSize", value)
            }
            onBlur={formik.handleBlur}
            error={
              formik.touched.customerSize && formik.errors.customerSize
                ? formik.errors.customerSize
                : null
            }
            isSearchable={false}
          />

          {/* Location */}
          <InputField
            name="location"
            label="Location"
            placeholder="e.g., Lagos, Nigeria"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.location && formik.errors.location
                ? formik.errors.location
                : null
            }
          />
          <p className="text-[14px] font-twk leading-[154%] text-[#828282]">I agree to the <a className="underline text-[#1463E5]" href="/privacy">privacy policy</a> & <a className="underline text-[#1463E5]" href="/terms">terms of use</a> by submitting the form</p>
        </div>

        <Button
          type="submit"
          style="primary"
          icon={<MoveRight />}
          iconPosition = "right"
          className="py-4 w-full text-lg mt-6 font-twk"
          
          disabled={loading || formik.isSubmitting}
        >
          {loading ? <Loader /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default DemoForm;
