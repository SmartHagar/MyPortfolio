/** @format */

import Image from "next/image";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

type Props = {
  label?: string;
  register: any;
  required?: boolean;
  name: string;
  errors?: any;
  addClass?: string;
  images?: any;
  setImages: (imgList: any) => void;
};

const ImageUpload = ({
  label,
  register,
  required,
  errors,
  addClass,
  name,
  images,
  setImages,
}: Props) => {
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log({ imageList }, { addUpdateIndex });
    setImages(imageList);
  };
  return (
    <div>
      <input
        type="text"
        id={label}
        {...register(name, {
          required,
        })}
        value={images?.length || ""}
      />
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper cursor-pointer">
            <div
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </div>
            &nbsp;
            <div onClick={onImageRemoveAll}>Remove all images</div>
            {imageList.map((imageL, index) => (
              <div key={index} className="image-item">
                <Image
                  src={imageL.data_url}
                  width={100}
                  height={100}
                  alt={""}
                />
                <div className="image-item__btn-wrapper">
                  <div onClick={() => onImageUpdate(index)}>Update</div>
                  <div onClick={() => onImageRemove(index)}>Remove</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
