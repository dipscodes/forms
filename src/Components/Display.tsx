import OneQForm from "./OneQFrom";
import { useState } from "react";
import Submit from "./Submit";
import File from "./File";
import MCQSubmit from "./MCQSubmit";
import BroadQuestionSubmit from "./BroadQuestionSubmit";
import ScaleQuestionSubmit from "./ScaleQuestionSubmit";

const Display = () => {
  const [mcqAnswer, setMcqAnswer] = useState<string>("");
  const [broadAnswer, setBroadAnswer] = useState<string>("");
  const [scaleAnswer, setScaleAnswer] = useState<number>(0);
  const [file, setFile] = useState<any>("");
  const [id, setID] = useState<string>("");

  const getMcqAnswer = (ans: string) => {
    setMcqAnswer(ans);
  };
  const getBroadAnswer = (ans: string) => {
    setBroadAnswer(ans);
  };
  const getScaleAnswer = (ans: number) => {
    setScaleAnswer(ans);
  };

  const getFile = (ans: any) => {
    setFile(ans);
  };

  const submitAnwer = () => {
    const formData = new FormData();
    formData.append("mcq", mcqAnswer);
    formData.append("broad", broadAnswer);
    formData.append("scale", scaleAnswer.toString());
    formData.append("file", file);

    (async () => {
      const res = await fetch("http://146.190.87.202:5000/api/forms", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setID(data._id);
    })();
  };

  return (
    <div className="w-full h-[500vh] min-h-[500vh] flex flex-col justify-start items-center">
      <OneQForm classname="">
        <MCQSubmit
          classname=""
          index={1}
          question="What is your favorite color?*"
          options={["blue", "red", "yellow", "green"]}
          getMcqAnswer={getMcqAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
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
      </OneQForm>
    </div>
  );
};

export default Display;
