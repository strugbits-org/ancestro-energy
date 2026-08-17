"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomSelect from "./CustomSelect";
import SearchableSelect from "./SearchableSelect";
import Image from "next/image";
import CustomCheckbox from "./CustomCheckbox";
import { useTranslation } from "react-i18next";
import countries from "../../lib/countries.json";

const MultiStepForm = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState({
    roofPhoto: "",
    electricPanel: "",
    bill: "",
  });
  const [uploading, setUploading] = useState({
    roofPhoto: false,
    electricPanel: false,
    bill: false,
  });
  const [submissionError, setSubmissionError] = useState(null);
  const { register, handleSubmit, setValue, watch, reset, control, formState: { errors } } = useForm({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      projectType: null,
      propertyOwner: null,
      step2: null,
      projectTypeSelect: "",
      step3: [],
      step4: [],
      billAmount: "",
      roofPhotoUrl: "",
      electricPanelUrl: "",
      billUrl: "",
      customSelect: "",
    },
  });

  const formData = watch();

  // const handleCheckboxChange = (field, option) => {
  //   if (field === "projectType" || field === "propertyOwner" || field === "step2") {
  //     setValue(field, option, { shouldValidate: true });
  //   } else {
  //     const current = formData[field] || [];
      
  //     if (field === "step4") {
  //       const allOptions = [
  //         "REDUCE MY ELECTRICITY BILLS",
  //         "REDUCE BLACKOUT RISK",
  //         "SUPPORT SUSTAINABILITY",     
  //       ];
        
  //       if (option === "ALL OF ABOVE" ) {
  //         const allSelected = current.length === allOptions.length;
  //         const updated = allSelected ? [] : [...allOptions];
  //         setValue(field, updated, { shouldValidate: true });
  //       } else {
  //         const updated = current.includes(option)
  //           ? current.filter((item) => item !== option)
  //           : [...current, option];
  //         setValue(field, updated, { shouldValidate: true });
  //       }
  //     } else {
  //       const updated = current.includes(option)
  //         ? current.filter((item) => item !== option)
  //         : [...current, option];
  //       setValue(field, updated, { shouldValidate: true });
  //     }
      
  //   }
  // };
  const handleCheckboxChange = (field, option) => {
    if (field === "projectType" || field === "propertyOwner" || field === "step2") {
      setValue(field, option, { shouldValidate: true });
    } else {
      const current = formData[field] || [];
      
      if (field === "step4") {
        const allOptions = i18n.language === "es" ? [
          "REDUCIR MIS FACTURAS ELÉCTRICAS",
          "REDUCIR EL RIESGO DE APAGONES",
          "APOYAR LA SOSTENIBILIDAD"
        ] : [
          "REDUCE MY ELECTRICITY BILLS",
          "REDUCE BLACKOUT RISK",
          "SUPPORT SUSTAINABILITY"
        ];
        
        if (option === "ALL OF ABOVE" || option === "TODAS LAS ANTERIORES") {
          const allSelected = current.length === allOptions.length;
          const updated = allSelected ? [] : [...allOptions];
          setValue(field, updated, { shouldValidate: true });
        } else {
          const updated = current.includes(option)
            ? current.filter((item) => item !== option)
            : [...current, option];
          setValue(field, updated, { shouldValidate: true });
        }
      } else {
        const updated = current.includes(option)
          ? current.filter((item) => item !== option)
          : [...current, option];
        setValue(field, updated, { shouldValidate: true });
      }
    }
  };

  const handleFileChange = (field) => async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileNames((prev) => ({ ...prev, [field]: file.name }));
    setUploading((prev) => ({ ...prev, [field]: true }));
    setSubmissionError(null); 

    try {
 
      const res = await fetch("/api/get-presigned-url", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          field,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to get pre-signed URL");
      }

      const { signedUrl, objectUrl } = await res.json();

      // Upload file directly to S3
      const uploadRes = await fetch(signedUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error("Failed to upload file to S3");
      }

      // Set the URL in form data
      setValue(`${field}Url`, objectUrl, { shouldValidate: true });
    } catch (error) {
      console.error("File upload error:", error);
      setSubmissionError("Failed to upload file. Please try again.");
      setFileNames((prev) => ({ ...prev, [field]: "" })); // Reset file name on error
    } finally {
      setUploading((prev) => ({ ...prev, [field]: false }));
    }
  };

  const onSubmit = async (data) => {
    try {
      if (step === 1 && (!data.propertyOwner || !data.customSelect || !data.country)) {
        setValue("propertyOwner", data.propertyOwner, { shouldValidate: true });
        setValue("customSelect", data.customSelect, { shouldValidate: true });
        setValue("country", data.country, { shouldValidate: true });
        return;
      }
      if (step === 2 && (!data.step2 || !data.projectTypeSelect || !data.billAmount || !data.billUrl)) {
        setValue("step2", data.step2, { shouldValidate: true });
        setValue("projectTypeSelect", data.projectTypeSelect, { shouldValidate: true });
        setValue("billAmount", data.billAmount, { shouldValidate: true });
        setValue("billUrl", data.billUrl, { shouldValidate: true });
        return;
      }
      if (step === 3 && (!data.step3 || data.step3.length === 0)) {
        setValue("step3", [], { shouldValidate: true });
        return;
      }
      if (step === 4 && (!data.step4 || data.step4.length === 0)) {
        setValue("step4", [], { shouldValidate: true });
        return;
      }

      if (step === 4) {
        const formDataToSend = new FormData();
        for (const key in data) {
          if (data[key] !== null && data[key] !== undefined) {

            formDataToSend.append(key, JSON.stringify(data[key]));
          }
        }
        setIsSubmitting(true);
        const response = await fetch("/api/submit-form", {
          method: "POST",
          body: formDataToSend,
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to submit form");
        }

        setSubmissionError(null);
        setStep(5);

        // Reset form to Step 1 after 5 seconds
        setTimeout(() => {
          reset({
            fullName: "",
            email: "",
            phone: "",
            city: "",
            country: "",
            projectType: null,
            propertyOwner: null,
            step2: null,
            projectTypeSelect: "",
            step3: [],
            step4: [],
            billAmount: "",
            roofPhotoUrl: "",
            electricPanelUrl: "",
            billUrl: "",
            customSelect: "",
          });
          setStep(1);
          setFileNames({
            roofPhoto: "",
            electricPanel: "",
            bill: "",
          });
          setSubmissionError(null);
        }, 5000);
      } else {
        setStep((prev) => Math.min(prev + 1, 5));
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionError(error.message || "An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Check if any file is uploading
  const isUploading = Object.values(uploading).some((status) => status);

  return (
    <section id="multi-step-form" className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 py-20 px-6">
      <h2 className="text-2xl md:text-[30px] font-bold text-white text-center max-w-4xl font-helvetica">
        {t("multiStepForm.title")}
      </h2>
      {submissionError && (
        <div className="text-red-500 text-center font-lato">
          {submissionError}
        </div>
      )}
      <div
        className="w-full max-w-4xl rounded-2xl border p-8 md:p-12 space-y-8 backdrop-blur-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderColor: step === 5 ? "#F5DC7B" : "#FFFFFF1A",
          borderWidth: step === 5 ? "1px" : undefined,
        }}
      >
        {step === 5 ? (
          <div className="text-center space-y-8">
            <h3 className="text-4xl font-bold text-white font-lato">{t("multiStepForm.thankYou")}</h3>
            <p className="text-white font-lato text-2xl text-center">
              {t("multiStepForm.thankYouSubtitle")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center relative">
              {step > 1 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={prevStep}
                >
                  <Image
                    src="/back.png"
                    alt="Back"
                    width={28}
                    height={28}
                    className="md:w-8 md:h-8 w-6 h-6"
                  />
                </div>
              )}
              <h3 className={`text-md md:text-[27px] font-lato font-bold text-white text-center ${step > 1 ? "pl-10" : ""} md:pl-0 mb-3`}>
                {t("multiStepForm.stepTitles", { returnObjects: true })[step - 1]}
              </h3>
            </div>

            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 gap-8 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.fullName")}
                    </label>
                    <input
                      {...register("fullName", { required: true })}
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{t("multiStepForm.errors.fullName")}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.email")}
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{t("multiStepForm.errors.email")}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 gap-8 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.phone")}
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      type="tel"
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.city")}
                    </label>
                    <input
                      {...register("city", { required: true })}
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                    {errors.city && <p className="text-red-500 text-sm">{t("multiStepForm.errors.city")}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 gap-8 text-white">
                  <div className="flex flex-col space-y-2">
                    <Controller
                      name="country"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <SearchableSelect
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                          options={countries.map(country => ({ value: country.name, label: country.name }))}
                        />
                      )}
                    />
                    {errors.country && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.country")}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Controller
                      name="customSelect"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomSelect
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                        />
                      )}
                    />
                    {errors.customSelect && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.customSelect")}</p>}
                  </div>
                </div>
                <div className="space-y-3 text-white my-4 md:my-8">
                  <label className="block text-sm font-lato font-bold text-[14px]">
                    {t("multiStepForm.propertyOwner")}
                  </label>
                  <Controller
                    name="propertyOwner"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <div className="flex gap-8">
                        {t("multiStepForm.propertyOwnerOptions", { returnObjects: true }).map((o) => (
                          <label key={o} className="flex items-center gap-2 cursor-pointer">
                            <CustomCheckbox
                              checked={field.value === o}
                              onChange={() => handleCheckboxChange("propertyOwner", o)}
                            />
                            <span>{o}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  />
                  {errors.propertyOwner && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.propertyOwner")}</p>}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <input type="hidden" {...register("roofPhotoUrl")} />
                <input type="hidden" {...register("electricPanelUrl")} />
                <input type="hidden" {...register("billUrl", { required: true })} />
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 gap-8 text-white">
                  <div className="flex flex-col space-y-2">
                    <Controller
                      name="projectTypeSelect"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomSelect
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                          options={t("multiStepForm.projectTypeOptions", { returnObjects: true })}
                          label={t("multiStepForm.projectType")}
                        />
                      )}
                    />
                    {errors.projectTypeSelect && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.projectTypeSelect")}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold font-lato">
                      {t("multiStepForm.roofReplacement")}
                    </label>
                    <Controller
                      name="step2"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <div className="flex gap-6">
                          {t("multiStepForm.roofReplacementOptions", { returnObjects: true }).map((o) => (
                            <label key={o} className="flex items-center gap-2 cursor-pointer">
                              <CustomCheckbox
                                checked={field.value === o}
                                onChange={() => handleCheckboxChange("step2", o)}
                              />
                              <span>{o}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    />
                    {errors.step2 && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.step2")}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 gap-8 text-white">
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <label className="text-sm font-bold font-lato">
                        {t("multiStepForm.uploadRoofPhoto")}
                      </label>
                      <span className="text-xs font-bold font-lato">
                        {t("multiStepForm.uploadRoofOptional")}
                      </span>
                    </div>
                    <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
                      {uploading.roofPhoto ? "Uploading..." : t("multiStepForm.uploadBill")}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange("roofPhoto")}
                        disabled={uploading.roofPhoto}
                      />
                    </label>
                    {fileNames.roofPhoto && (
                      <p className="text-sm text-gray-300 max-w-[200px] truncate">{fileNames.roofPhoto}</p>
                    )}
                    <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <label className="text-sm font-bold font-lato">
                        {t("multiStepForm.uploadElectricPanel")}
                      </label>
                      <span className="text-xs font-lato">
                        {t("multiStepForm.uploadElectricPanelOptional")}
                      </span>
                    </div>
                    <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
                      {uploading.electricPanel ? "Uploading..." : t("multiStepForm.uploadBill")}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange("electricPanel")}
                        disabled={uploading.electricPanel}
                      />
                    </label>
                    {fileNames.electricPanel && (
                      <p className="text-sm text-gray-300 max-w-[200px] truncate">{fileNames.electricPanel}</p>
                    )}
                    <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 md:my-8 gap-8 text-white">
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <label className="text-sm font-bold font-lato">
                        {t("multiStepForm.averageBill")}
                      </label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        {...register("billAmount", { required: true })}
                        type="number"
                        className="flex w-24 bg-transparent border-b border-[#FFFFFF4D] text-white text-sm font-lato px-2 py-1 focus:outline-none focus:border-[#F8B03B]"
                        placeholder="$/MO"
                        min={0}
                      />
                      <span className="text-white text-sm tracking-widest font-lato text-[12px] font-bold">
                        {t("multiStepForm.billValueLabel")}
                      </span>
                    </div>
                    {errors.billAmount && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.billAmount")}</p>}
                    <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <label className="text-sm font-bold font-lato">
                        {t("multiStepForm.uploadBill")}
                      </label>
                      <span className="text-xs font-lato">
                        {t("multiStepForm.uploadBillHint")}
                      </span>
                    </div>
                    <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
                      {uploading.bill ? "Uploading..." : t("multiStepForm.uploadBill")}
                      <input
                        type="file"
                        accept="application/pdf, image/jpeg"
                        className="hidden"
                        onChange={handleFileChange("bill")}
                        disabled={uploading.bill}
                      />
                    </label>
                    {fileNames.bill && (
                      <p className="text-sm text-gray-300 max-w-[200px] truncate">{fileNames.bill}</p>
                    )}
                    {errors.billUrl && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.bill")}</p>}
                    <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
                  </div>
                </div>
              </>
            )}
            {step === 3 && (
              <div className="space-y-4 text-white my-4 md:my-8">
                <Controller
                  name="step3"
                  control={control}
                  rules={{ validate: (value) => value.length > 0 || t("multiStepForm.errors.step3") }}
                  render={({ field }) => (
                    <>
                      {t("multiStepForm.step3Options", { returnObjects: true }).map((item) => (
                        <label key={item} className="flex items-center gap-2 md:gap-4 cursor-pointer w-full">
                          <CustomCheckbox
                            checked={field.value.includes(item)}
                            onChange={() => handleCheckboxChange("step3", item)}
                          />
                          <span className="font-lato text-[12px] sm:text-[15px] leading flex-1">
                            {item}
                          </span>
                        </label>
                      ))}
                    </>
                  )}
                />
                {errors.step3 && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.step3")}</p>}
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4 text-white my-4 sm:my-6 md:my-8">
                <p className="text-base sm:text-lg font-lato">{t("multiStepForm.step4Intro")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <Controller
                    name="step4"
                    control={control}
                    rules={{ validate: (value) => value.length > 0 || t("multiStepForm.errors.step3") }}
                    render={({ field }) => (
                      <>
                        {t("multiStepForm.step4Options", { returnObjects: true }).map((item) => (
                          <label
                            key={item}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <CustomCheckbox
                              checked={
                                item === "ALL OF ABOVE" || item === "TODAS LAS ANTERIORES"
                                  ? formData.step4.length === 3
                                  : formData.step4.includes(item)
                              }
                              onChange={() => handleCheckboxChange("step4", item)}
                            />
                            <span className="text-sm sm:text-base font-lato">{item}</span>
                          </label>
                        ))}
                      </>
                    )}
                  />
                </div>
                {errors.step4 && <p className="text-red-500 text-sm mt-2">{t("multiStepForm.errors.step3")}</p>}
              </div>
            )}
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-full font-bold text-sm md:text-[18px] font-lato cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#F8B03B",
                color: "#000000",
              }}
              disabled={isSubmitting || isUploading}
            >
              {isSubmitting && step === 4 ? t("multiStepForm.submittingButton") : step === 4 ? t("multiStepForm.submitButton") : t("multiStepForm.nextButton")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default MultiStepForm;