interface Props {
  previewLink: string;
}

const PreviewOnly = ({ previewLink }: Props) => {
  return (
    <div
      className={`w-8/12 h-auto min-h-[50%] flex flex-col justify-start items-start`}
    >
      <div className="h-1/6 w-full text-4xl">Preview your answer :</div>
      <div className="h-5/6 w-full flex flex-col justify-start items-start pl-12 text-lg">
        <div className="relative">
          <div
            className="border-2 border-solid border-violet-800 my-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white transition-all ease-in-out duration-150 relative"
          >
            <a href={`http://vikramadityacodes.in/${previewLink}`}>Preview</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewOnly;
