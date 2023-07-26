import { BsHandThumbsUp } from "react-icons/bs";

interface Props {
  classname: string;
  index: number;
  question: string;
  options: string[];
}

const ScaleQuestion = ({ classname, index, question, options }: Props) => {
  const numbers: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div
      className={`w-8/12 h-auto min-h-[50%] flex flex-col justify-start items-start ${classname}`}
    >
      <div className="h-1/6 w-full text-4xl">
        {index} : {question}
      </div>
      <div className="h-5/6 w-full flex flex-col justify-start items-start pl-12 text-lg">
        <div className="w-auto h-[60px] min-h-[60px] min-w-full mb-4 flex flex-row">
          {numbers.map((value) => {
            return (
              <div
                key={value}
                className="h-full w-[60px] mx-1 bg-blue-200 rounded-md border-2 border-solid border-blue-900 flex flex-row justify-center items-center cursor-pointer text-blue-700 text-xl"
                onClick={(e) => {
                  const targetElement = e.target as HTMLDivElement;
                  if (
                    window.getComputedStyle(targetElement).backgroundColor ===
                    "rgb(191, 219, 254)"
                  ) {
                    const parentElement =
                      targetElement.parentNode as HTMLElement;
                    const childElements = parentElement.children;
                    const siblingElements = Array.from(
                      childElements
                    ) as HTMLElement[];
                    siblingElements.forEach((element) => {
                      if (element === targetElement) {
                        element.style.backgroundColor = "rgb(37, 99, 235)";
                        element.style.color = "white";
                      } else {
                        element.style.backgroundColor = "rgb(191, 219, 254)";
                        element.style.color = "rgb(29, 78, 216)";
                      }
                    });
                  }
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
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

export default ScaleQuestion;
