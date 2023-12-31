interface Props {
  classname: string;
  index: number;
  question: string;
  input?: Buffer;
  getFile(ans: any): void;
}

const File = ({ classname, index, question, input, getFile }: Props) => {
  function toBase64(arr: Buffer) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }
  return (
    <div
      className={`w-8/12 h-auto min-h-[50%] flex flex-col justify-start items-start ${classname}`}
    >
      <div className="h-1/6 w-full text-4xl">
        {index} : {question}
      </div>
      <div className="h-5/6 w-full flex flex-col justify-start items-start pl-12 text-lg max-h-[60px]">
        <input
          type="file"
          id="file-id"
          className="w-full h-auto bg-transparent focus:outline-none text-2xl mb-4 border-b-2 border-solid border-blue-700 pb-12"
          placeholder="Type Your Answer Here ..."
          onChange={(e) => {
            getFile((e as any).target.files[0]);
          }}
        />
        {input ? (
        <div className="flex flex-col justify-start items-center max-w-[500px] h-auto">
            <img
              alt="worked"
              src={`data:image/png;base64,${toBase64(
                (input as any).data.data
              )}`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

File.defaultProps = {
  input: null,
};

export default File;
