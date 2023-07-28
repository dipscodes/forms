import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneQForm from "./OneQFrom";
import MCQ from "./MCQ";
import BroadQuestion from "./BroadQuestion";
import ScaleQuestion from "./ScaleQuestion";
import Submit from "./Submit";
import File from "./File";

const Display = () => {
  const [mcqAnswer, setMcqAnswer] = useState<string>("");
  const [broadAnswer, setBroadAnswer] = useState<string>("");
  const [scaleAnswer, setScaleAnswer] = useState<number>(0);
  const [file, setFile] = useState<any>("");
  const [formData, setFormData] = useState<object>({});

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/forms/${id}`, {
      method: "GET",
    });
      const v = await res.json();
      setFormData(v);
      setMcqAnswer(v.mcq);
      setBroadAnswer(v.broad);
      setScaleAnswer(v.scale);
      setFile(v.file);
      console.log(v);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    fetch("http://146.190.87.202:5000/api/forms", {
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
          input={mcqAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
        <BroadQuestion
          classname=""
          index={1}
          question="What is your favorite color?*"
          getBroadAnswer={getBroadAnswer}
          input={broadAnswer}
        />
      </OneQForm>
      <OneQForm classname="">
        <ScaleQuestion
          classname=""
          index={1}
          question="What is your favorite color?*"
          getScaleAnswer={getScaleAnswer}
          input={scaleAnswer}
        />
      </OneQForm>
      <OneQForm>
        <File
          classname=""
          index={1}
          question="What is your favorite color?*"
          getFile={getFile}
          input={file}
        />
      </OneQForm>
      <OneQForm classname="">
        <Submit submitAnwer={submitAnwer} previewLink="" />
      </OneQForm>
    </div>
  );
};

export default Display;
