import OneQForm from "./OneQFrom";
import MCQ from "./MCQ";
import BroadQuestion from "./BroadQuestion";
import ScaleQuestion from "./ScaleQuestion";

const Display = () => {
  return (
    <div className="w-full h-[500vh] min-h-[500vh] flex flex-col justify-start items-center">
      <OneQForm classname="">
        <MCQ
          classname=""
          index={1}
          question="What is your favorite color?*"
          options={["blue", "red", "yellow", "green"]}
        />
      </OneQForm>
      <OneQForm classname="">
        <BroadQuestion
          classname=""
          index={1}
          question="What is your favorite color?*"
          options={["blue", "red", "yellow", "green", "yellow", "green"]}
        />
      </OneQForm>
      <OneQForm classname="">
        <ScaleQuestion
          classname=""
          index={1}
          question="What is your favorite color?*"
          options={["blue", "red", "yellow", "green", "yellow", "green"]}
        />
      </OneQForm>
    </div>
  );
};

export default Display;
