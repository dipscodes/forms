import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import OneQForm from "./OneQFrom";
// import MCQ from "./MCQ";
// import BroadQuestion from "./BroadQuestion";
// import ScaleQuestion from "./ScaleQuestion";
// import File from "./File";
// import PreviewOnly from "./PreviewOnly";
import CategoryFormBuilder from "./CategoryFormBuilder";
import SubmitForm from "./SubmitForm";

const FormBuilder = () => {
  const [categoryQuestion, setCategoryQuestion] = useState<string>("");
  // const [broadAnswer, setBroadAnswer] = useState<string>("");
  // const [scaleAnswer, setScaleAnswer] = useState<number>(0);
  // const [file, setFile] = useState<any>("");

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://146.190.87.202:5000/api/forms/${id}`, {
        method: "GET",
      });
      const v = await res.json();
      console.log(v);
      // setMcqAnswer(v.mcq);
      // setBroadAnswer(v.broad);
      // setScaleAnswer(v.scale);
      // setFile(v.file);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addCategoryQuestion = useCallback((question: string) => {
    setCategoryQuestion(question);
  }, []);

  const submitForm = useCallback(() => {
    const formData = new FormData();
    formData.append("mcq", categoryQuestion);
    //   formData.append("broad", broadAnswer);
    //   formData.append("scale", scaleAnswer.toString());
    //   formData.append("file", file);

    //   fetch("http://146.190.87.202:5000/api/forms", {
    //     method: "POST",
    //     body: formData,
    //   });
  }, [categoryQuestion]);

  // const getMcqAnswer = (ans: string) => {
  //   setMcqAnswer(ans);
  // };
  // const getBroadAnswer = (ans: string) => {
  //   setBroadAnswer(ans);
  // };
  // const getScaleAnswer = (ans: number) => {
  //   setScaleAnswer(ans);
  // };

  // const getFile = (ans: any) => {
  //   setFile(ans);
  // };

  // const submitAnwer = () => {
  //   const formData = new FormData();
  //   formData.append("mcq", mcqAnswer);
  //   formData.append("broad", broadAnswer);
  //   formData.append("scale", scaleAnswer.toString());
  //   formData.append("file", file);

  //   fetch("http://146.190.87.202:5000/api/forms", {
  //     method: "POST",
  //     body: formData,
  //   });
  // };

  return (
    <div className="w-full h-[500vh] min-h-[500vh] flex flex-col justify-start items-center">
      <OneQForm classname="">
        <CategoryFormBuilder
          className=""
          // index={1}
          // question="What is your favorite color?*"
          // options={["blue", "red", "yellow", "green"]}
          addCategoryQuestion={addCategoryQuestion}
          // input={mcqAnswer}
        />
      </OneQForm>
      {/* <OneQForm classname="">
        <BroadQuestion
          classname=""
          index={1}
          question="What is your favorite book?*"
          getBroadAnswer={getBroadAnswer}
          input={broadAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
        <ScaleQuestion
          classname=""
          index={1}
          question="What is your favorite number?*"
          getScaleAnswer={getScaleAnswer}
          input={scaleAnswer}
        />
      </OneQForm>
      <OneQForm>
        <File
          classname=""
          index={1}
          question="What is your favorite png image?*"
          getFile={getFile}
          input={file}
        />
      </OneQForm>*/}
      <OneQForm classname="">
        <SubmitForm submitForm={submitForm} previewLink={id ?? ""} />
      </OneQForm>
    </div>
  );
};

export default FormBuilder;
