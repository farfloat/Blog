import ExampleLayout from "@/layouts/exmplaeLayout";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useFormik } from "formik";

const FileUploader = () => {
  const [filename, setFilename] = useState<string>("");

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
    setFilename(file.name);
  };

  const formik = useFormik({
    initialValues: {
      radioSelect: "radio-1",
      checkbox: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <ExampleLayout>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="pt-20">
          <h3 className="text-md">Select File</h3>
          <div className="mt-4">
            <label
              htmlFor="inputFile"
              className="inline-block border border-slate-500 text-slate-600 rounded-md px-4 py-1 cursor-pointer
              hover:opacity-70 transition-opacity text-sm"
            >
              Attach a File
              <input type="file" id="inputFile" name="inputFile" accept="image/*" hidden onChange={onFile} />
            </label>
            <span className="px-4">{filename}</span>
          </div>
        </div>

        <div className="pt-20">
          <h3 className="text-md">Radio Buttons</h3>
          <div className="mt-4">
            <label htmlFor="radio-1" className="flex items-center">
              <input
                defaultChecked={true}
                type="radio"
                id="radio-1"
                name="radioSelect"
                value="radio-1"
                hidden
                className="peer"
                onChange={formik.handleChange}
              />
              <div
                className="w-6 h-6 rounded-full border border-teal-400 mr-3 relative peer-checked:before:content-[''] peer-checked:before:absolute peer-checked:before:w-4
              peer-checked:before:h-4 peer-checked:before:bg-teal-500 peer-checked:before:rounded-full peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2"
              ></div>
              <span>color charts</span>
            </label>
            <label htmlFor="radio-2" className="flex items-center">
              <input
                type="radio"
                id="radio-2"
                name="radioSelect"
                value="radio-2"
                hidden
                className="peer"
                onChange={formik.handleChange}
              />
              <div
                className="w-6 h-6 rounded-full border border-teal-400 mr-3 relative peer-checked:before:content-[''] peer-checked:before:absolute peer-checked:before:w-4
              peer-checked:before:h-4 peer-checked:before:bg-teal-500 peer-checked:before:rounded-full peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2"
              ></div>
              <span>miso soup</span>
            </label>
            <label htmlFor="radio-3" className="flex items-center">
              <input
                type="radio"
                id="radio-3"
                name="radioSelect"
                value="radio-3"
                hidden
                className="peer"
                onChange={formik.handleChange}
              />
              <div
                className="w-6 h-6 rounded-full border border-teal-400 mr-3 relative peer-checked:before:content-[''] peer-checked:before:absolute peer-checked:before:w-4
              peer-checked:before:h-4 peer-checked:before:bg-teal-500 peer-checked:before:rounded-full peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2"
              ></div>
              <span>chocolate Chocolat</span>
            </label>
          </div>
        </div>

        <div className="pt-20">
          <h3 className="text-md">Checkbox</h3>
          <div className="mt-4">
            <label htmlFor="checkbox-1" className="flex items-center">
              <input
                type="checkbox"
                id="checkbox-1"
                name="checkbox"
                value="checkbox-1"
                hidden
                className="peer"
                onChange={formik.handleChange}
              />
              <div
                className="w-6 h-6 border border-sky-400 mr-3 relative peer-checked:before:content-[''] peer-checked:before:absolute 
                peer-checked:before:w-6 peer-checked:before:h-3 peer-checked:before:border-l-2 peer-checked:before:border-b-2 peer-checked:before:border-sky-400 
                peer-checked:before:left-[.2rem] peer-checked:before:-rotate-45"
              ></div>
              <span>An eternal moment</span>
            </label>

            <label htmlFor="checkbox-2" className="flex items-center">
              <input
                type="checkbox"
                id="checkbox-2"
                name="checkbox"
                value="checkbox-2"
                hidden
                className="peer"
                onChange={formik.handleChange}
              />
              <div
                className="w-6 h-6 border border-sky-400 mr-3 relative peer-checked:before:content-[''] peer-checked:before:absolute 
                peer-checked:before:w-6 peer-checked:before:h-3 peer-checked:before:border-l-2 peer-checked:before:border-b-2 peer-checked:before:border-sky-400 
                peer-checked:before:left-[.2rem] peer-checked:before:-rotate-45"
              ></div>
              <span>What I want to tell you</span>
            </label>
          </div>
        </div>

        <div className="mt-14 flex justify-start">
          <div className="w-full max-w-[12rem] flex justify-center">
            {formik.isSubmitting ? (
              <div className="flex justify-center items-center">
                <ReactLoading type={`spin`} height={28} width={28} color="lightblue" />
              </div>
            ) : (
              <button
                type="submit"
                disabled={formik.isSubmitting}
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
                className="text-slate-100 bg-blue-400  px-6 py-2 rounded hover:opacity-80 transition-opacity"
              >
                <span className="tracking-wide">send</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </ExampleLayout>
  );
};

export default FileUploader;
