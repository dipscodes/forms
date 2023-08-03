import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineDragIndicator } from "react-icons/md";

interface Props {
  className?: string;
  // index: number;
  // question: string;
  // options: string[];
  addCategoryQuestion(question: object): void;
}

const CategoryFormBuilder = ({ className, addCategoryQuestion }: Props) => {
  const [choices, setChoices] = useState<string[]>([]);
  const [enter, setEnter] = useState<Boolean>(false);
  interface TProps {
    questionStatement: string | null;
    choices: string[];
    categories: string[];
    answer: object;
  }

  const templateQuestion: TProps = {
    questionStatement: null,
    choices: [],
    categories: [],
    answer: {},
  };
  const [question, setQuestion] = useState(templateQuestion);
  const [toggle, setToggle] = useState(0);

  const swapElements = (array: string[], index1: number, index2: number) => {
    const newArray = [...array]; // Create a shallow copy of the original array
    const temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
    return newArray;
  };

  return (
    <div
      className={`w-8/12 h-auto min-h-[80%] flex flex-col justify-start items-start`}
    >
      <div id="cat-q">
        <input
          type="text"
          className="w-full h-auto bg-transparent focus:outline-none text-2xl mb-4 border-b-2 border-solid border-blue-700 py-2"
          placeholder="Type Your Question Here ..."
          onChange={(e) => {
            templateQuestion.questionStatement = e.target.value;
            setQuestion(templateQuestion);
          }}
        />
      </div>
      <div
        id="categories"
        className="w-full flex flex-col justify-start items-start mt-3"
      >
        <div className="w-auto h-full flex flex-row justify-start items-center">
          <input
            key={toggle}
            id="category-question-ans-input"
            type="text"
            className="w-[200px] bg-transparent focus:outline-none text-2xl border-2 border-solid border-blue-700 py-1 px-1 rounded-md mr-2"
          />
          <button
            className="text-blue-700"
            onClick={() => {
              const i = document.getElementById(
                "category-question-ans-input"
              ) as HTMLInputElement;
              if (i.value === "") return;
              choices.push(i.value);
              setChoices(choices);
              setToggle((prev) => (prev + 1) % 2);
            }}
          >
            <AiOutlinePlusCircle size={37} />
          </button>
        </div>
        <div
          key={toggle}
          className="w-auto h-auto flex flex-col-reverse justify-start items-start mt-3"
        >
          {choices.map((value, index) => {
            return (
              <div
                key={index}
                className="w-auto h-10 border-2 border-solid border-blue-700 items-center my-1 px-2 flex flex-row justify-start rounded-md hover:bg-slate-300 cursor-grab"
                draggable={true}
                onDragStart={(e) => {
                  e.dataTransfer.effectAllowed = "move";
                  e.dataTransfer.setData("index", `${index}`);
                  e.dataTransfer.setData("enter", "false");
                  setEnter(false);
                }}
                onDragEnter={async (e) => {
                  e.preventDefault();
                  e.dataTransfer.effectAllowed = "move";
                  if (index === parseInt(e.dataTransfer.getData("index")))
                    return;
                  if (!enter) {
                    e.dataTransfer.dropEffect = "move";
                    setEnter(true);
                    setChoices(swapElements(
                      choices,
                      index,
                      parseInt(e.dataTransfer.getData("index"))
                    ));
                    setToggle((prev) => (prev + 1) % 2);
                    console.log(choices);
                  }
                }}
                onDragLeave={async (e) => {
                  e.preventDefault();
                  if (enter) {
                    e.dataTransfer.dropEffect = "none";
                    setEnter(false);
                    setChoices(swapElements(
                      choices,
                      index,
                      parseInt(e.dataTransfer.getData("index"))
                    ));
                    setToggle((prev) => (prev + 1) % 2);
                    console.log(choices);
                  }
                }}
              >
                <MdOutlineDragIndicator
                  size={25}
                  className="border-r-2 border-solid border-blue-700 h-10/12 pr-1 w-auto"
                />
                <span className="mx-3">{value}</span>
                <RxCrossCircled
                  size={25}
                  className="cursor-pointer"
                  onClick={(e) => {
                    setChoices(
                      choices.filter(
                        (item) =>
                          item !==
                          (
                            (e.currentTarget as SVGAElement)
                              .parentNode as HTMLDivElement
                          ).querySelector("span")?.innerText
                      )
                    );
                    setToggle((prev) => (prev + 1) % 2);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div id="answers"></div>
      <div id="cat-ans-map"></div>
      <div id="submitQuestion">
        <button
          className="h-12 w-auto border-2 border-solid border-blue-800 rounded-md px-3 mt-4"
          onClick={() => addCategoryQuestion(question)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

CategoryFormBuilder.defautlProps = {
  className: "",
};

export default CategoryFormBuilder;
