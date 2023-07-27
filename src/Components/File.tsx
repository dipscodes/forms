interface Props {
  classname: string;
  index: number;
  question: string;
  getFile(ans: any): void;
}

const File = ({ classname, index, question, getFile }: Props) => {
  return (
    <div
      className={`w-8/12 h-auto min-h-[50%] flex flex-col justify-start items-start ${classname}`}
    >
      <div className="h-1/6 w-full text-4xl">
        {index} : {question}
      </div>
      <div className="h-5/6 w-full flex flex-col justify-start items-start pl-12 text-lg">
        <input
          type="file"
          id="file-id"
          className="w-full h-auto bg-transparent focus:outline-none text-2xl mb-4 border-b-2 border-solid border-blue-700 py-2"
          placeholder="Type Your Answer Here ..."
          onChange={(e) => {
            console.log((document.getElementById('file-id') as any).files[0])
            getFile((e as any).target.files[0])
        }}
        />
        <div className="relative">
          <div className="border-2 border-solid border-violet-800 my-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white transition-all ease-in-out duration-150 relative">
            Ok
          </div>
        </div>
      </div>
    </div>
  );
};

export default File;
