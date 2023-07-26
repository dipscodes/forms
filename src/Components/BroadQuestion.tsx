import { BsHandThumbsUp } from "react-icons/bs";

interface Props {
  classname: string;
  index: number;
  question: string;
  options: string[];
}

const BroadQuestion = ({ classname, index, question, options }: Props) => {
  return (
    <div
      className={`w-8/12 h-auto min-h-[50%] flex flex-col justify-start items-start ${classname}`}
    >
      <div className="h-1/6 w-full text-4xl">
        {index} : {question}
      </div>
      <div className="h-5/6 w-full flex flex-col justify-start items-start pl-12 text-lg">
        <input
          type="text"
          className="w-full h-auto bg-transparent focus:outline-none text-2xl mb-4 border-b-2 border-solid border-blue-700 py-2"
          placeholder="Type Your Answer Here ..."
        />
        <div className="relative">
          <div className="border-2 border-solid border-violet-800 my-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white transition-all ease-in-out duration-150 relative">
            Ok
          </div>
          <BsHandThumbsUp
            size={30}
            className="absolute bottom-1/4 -right-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default BroadQuestion;
