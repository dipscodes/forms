import OneQForm from "./OneQFrom";
import MCQ from "./MCQ";
import BroadQuestion from "./BroadQuestion";
import ScaleQuestion from "./ScaleQuestion";
import { useState } from "react";
import Submit from "./Submit";
import File from "./File";

const Display = () => {
  const [mcqAnswer, setMcqAnswer] = useState<string>("");
  const [broadAnswer, setBroadAnswer] = useState<string>("");
  const [scaleAnswer, setScaleAnswer] = useState<number>(0);
  const [file, setFile] = useState<any>("");

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
  }

  const submitAnwer = () => {
    const formData = new FormData();
    formData.append("mcq", mcqAnswer);
    formData.append("broad", broadAnswer);
    formData.append("scale", scaleAnswer.toString());
    formData.append("file", file);

    const api_url = process.env.API_URL as string;

    fetch(api_url, {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="w-full h-[500vh] min-h-[500vh] flex flex-col justify-start items-center">
      <OneQForm classname="">
        <MCQ
          classname=""
          index={1}
          question="What is your favorite color?*"
          options={["blue", "red", "yellow", "green"]}
          getMcqAnswer={getMcqAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
        <BroadQuestion
          classname=""
          index={1}
          question="What is your favorite color?*"
          getBroadAnswer={getBroadAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
        <ScaleQuestion
          classname=""
          index={1}
          question="What is your favorite color?*"
          getScaleAnswer={getScaleAnswer}
        />
      </OneQForm>
      <OneQForm>
        <File
          classname=""
          index={1}
          question="What is your favorite color?*"
          getFile={getFile}
        />
      </OneQForm>
      <OneQForm classname="">
        <Submit submitAnwer={submitAnwer} />
      </OneQForm>
    </div>
  );
};

export default Display;
