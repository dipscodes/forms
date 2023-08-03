// import { useState } from "react";
// import Submit from "./SubmitForm";
// import File from "./File";
// import MCQSubmit from "./MCQSubmit";
// import BroadQuestionSubmit from "./BroadQuestionSubmit";
// import ScaleQuestionSubmit from "./ScaleQuestionSubmit";
import OneQForm from "./OneQFrom";

const Display = () => {
  // const [mcqAnswer, setMcqAnswer] = useState<string>("");
  // const [broadAnswer, setBroadAnswer] = useState<string>("");
  // const [scaleAnswer, setScaleAnswer] = useState<number>(0);
  // const [file, setFile] = useState<any>("");
  // const [id, setID] = useState<string>("");

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

  //   (async () => {
  //     const res = await fetch("http://146.190.87.202:5000/api/forms", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const data = await res.json();
  //     setID(data._id);
  //   })();
  // };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <OneQForm classname="">
        <div className="w-2/4 h-[200px] flex flex-row justify-between items-center">
          <div className="border-2 border-solid border-zinc-800 w-5/12 h-20 rounded-lg items-center flex flex-row justify-center text-4xl cursor-pointer py-5 hover:bg-green-800 hover:text-cyan-100 transition-all duration-200 ease-in-out">
            <span>Form Builder</span>
          </div>
          <div className="border-2 border-solid border-zinc-800 w-5/12 h-20 rounded-lg items-center flex flex-row justify-center text-4xl cursor-pointer py-5 hover:bg-green-800 hover:text-cyan-100 transition-all duration-200 ease-in-out">
            <span>Show Forms</span>
          </div>
        </div>
      </OneQForm>
      {/* <OneQForm classname="">
        <BroadQuestionSubmit
          classname=""
          index={1}
          question="What is your favorite book?*"
          getBroadAnswer={getBroadAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
        <ScaleQuestionSubmit
          classname=""
          index={1}
          question="What is your favorite number?*"
          getScaleAnswer={getScaleAnswer}
        />
      </OneQForm>
      <OneQForm>
        <File
          classname=""
          index={1}
          question="What is your favorite png image?*"
          getFile={getFile}
        />
      </OneQForm>
      <OneQForm classname="">
        <Submit
          submitAnwer={submitAnwer}
          previewLink={id}
        />
      </OneQForm> */}
    </div>
  );
};

export default Display;
