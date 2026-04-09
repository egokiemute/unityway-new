"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import TextArea from "@/components/ui/TextArea";
import { MoveRight } from "lucide-react";

const serviceOptions = [
  "Personal Care & Hygiene Assistance",
  "Medication Support",
  "Companionship & Emotional Support",
  "Meal Preparation & Nutritional Assistance",
  "Mobility Assistance & Safe Transfers",
  "Home Environment Support",
  "Household Routine Support",
  "Specialist Care Services",
  "Live-In Care",
];

const timeOfDayOptions = ["Morning", "Afternoon", "Evening"];
const preferredTimeOptions = ["09:00", "11:00", "13:00", "15:00"];

export default function CareBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    timeOfDay: "",
    preferredTime: "",
    preferredDate: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      service: "",
      timeOfDay: "",
      preferredTime: "",
      preferredDate: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#F1F8FF] min-h-[500px] mx-auto rounded-[19.02px] w-full max-w-[630px] flex flex-col gap-6 py-[40px] px-[35px]">
      {submitted && (
        <div className="rounded-2xl bg-white px-4 py-3 text-sm text-[#0E152B]">
          <p className="font-semibold">Booking request received</p>
          <p className="mt-1">
            Your care booking request has been sent successfully. We will
            contact you soon to confirm the details.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          name="name"
          label="Your Name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <InputField
          name="email"
          label="Your Email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <SelectField
          name="service"
          label="Choose Care Service"
          placeholder="Choose Care Service"
          value={formData.service}
          onChange={(value) =>
            setFormData((current) => ({ ...current, service: value }))
          }
          options={serviceOptions.map((service) => ({
            value: service,
            label: service,
          }))}
          isSearchable={false}
        />

        <SelectField
          name="timeOfDay"
          label="Preferred Time of Day"
          placeholder="Preferred Time of Day"
          value={formData.timeOfDay}
          onChange={(value) =>
            setFormData((current) => ({ ...current, timeOfDay: value }))
          }
          options={timeOfDayOptions.map((option) => ({
            value: option,
            label: option,
          }))}
          isSearchable={false}
        />

        <SelectField
          name="preferredTime"
          label="Preferred Time"
          placeholder="Preferred Time"
          value={formData.preferredTime}
          onChange={(value) =>
            setFormData((current) => ({ ...current, preferredTime: value }))
          }
          options={preferredTimeOptions.map((option) => ({
            value: option,
            label: option,
          }))}
          isSearchable={false}
        />

        <InputField
          name="preferredDate"
          label="Preferred date"
          type="date"
          value={formData.preferredDate}
          onChange={handleInputChange}
        />

        <InputField
          name="phone"
          label="Phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <InputField
          name="address"
          label="Address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <TextArea
          name="message"
          label="Message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
        />

        <Button
          type="submit"
          style="primary"
          icon={<MoveRight />}
          iconPosition="right"
          className="py-4 w-full text-lg mt-2 font-twk"
        >
          Book Care
        </Button>
      </form>
    </div>
  );
}
