/** @format */
"use client";
import ButtonDefault from "@/components/button/ButtonDefault";
import ImageUpload from "@/components/input/ImageUpload";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import useProject from "@/store/crud/Projects";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  dtEdit: any;
  showModal: boolean;
  setShowModal: (data: boolean) => void;
};

type Inputs = {
  id: number | string;
  name: string;
  link_github: string;
  link_website: string;
  description: string;
  image: any;
};

const Form = ({ dtEdit, showModal, setShowModal }: Props) => {
  const [images, setImages] = useState();
  // store
  const { addData } = useProject();
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.image = images;
    console.log({ data });
    await addData(data);
    resetForm();
  };

  const resetForm = () => {
    setValue("id", "");
    setValue("name", "");
    setValue("link_github", "");
    setValue("link_website", "");
    setValue("description", "");
    setValue("image", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("name", dtEdit.name);
      setValue("link_github", dtEdit.link_github);
      setValue("link_website", dtEdit.link_website);
      setValue("description", dtEdit.description);
      setValue("image", dtEdit.image);
    } else {
      resetForm();
    }
  }, [showModal]);

  return (
    <ModalDefault
      title="Form Mata Kuliah"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex gap-4">
            <InputTextDefault
              label="Nama"
              name="name"
              register={register}
              required
              minLength={3}
              errors={errors.name}
              addClass="shrink w-[100%]"
            />
          </div>
          <div className="flex gap-4">
            <InputTextDefault
              label="Link Github"
              name="link_github"
              register={register}
              minLength={3}
              addClass="shrink w-[100%]"
            />
          </div>
          <div className="flex gap-4">
            <InputTextDefault
              label="Link Website"
              name="link_website"
              register={register}
              minLength={3}
              required
              errors={errors.link_website}
              addClass="shrink w-[100%]"
            />
          </div>
          <div className="flex gap-4">
            <InputTextDefault
              label="Description"
              name="description"
              register={register}
              minLength={3}
              addClass="shrink w-[100%]"
            />
          </div>
          <ImageUpload
            label="Description"
            name="image"
            register={register}
            images={images}
            setImages={setImages}
            required
          />
        </div>
        <div>
          <ButtonDefault text="Simpan" onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
