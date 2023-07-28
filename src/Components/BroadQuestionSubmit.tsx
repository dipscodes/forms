interface Props {
  classname: string;
  index: number;
  question: string;
  getBroadAnswer(ans: string): void;
}

const BroadQuestionSubmit = ({ classname, index, question, getBroadAnswer }: Props) => {
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
          onChange={(e) => getBroadAnswer(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BroadQuestionSubmit;
