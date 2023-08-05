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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const moveElementIndexToIndex = (
    array: string[],
    sourceIndex: number,
    destinationIndex: number
  ): string[] => {
    var copyList = [...array];
    var removedElement = copyList.splice(sourceIndex, 1)[0];
    copyList.push(removedElement);
    let dIndex = destinationIndex;
    (sourceIndex > destinationIndex)? dIndex = destinationIndex + 1 : dIndex = destinationIndex;
    if (dIndex >= copyList.length)
      dIndex = copyList.length - 1;
    copyList.splice(dIndex, 0, copyList.pop() as string);
    return copyList;
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const conditionOne =
      `empty-${parseInt(e.dataTransfer.getData("index")) + 1}` ===
      (e.target as HTMLDivElement).id;
    const conditionTwo =
      `empty-${e.dataTransfer.getData("index")}` ===
      (e.target as HTMLDivElement).id;
    if (!(conditionOne || conditionTwo))
      (e.target as HTMLDivElement).classList.replace("outsight", "insight");
  };

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const conditionOne =
      `empty-${parseInt(e.dataTransfer.getData("index")) + 1}` ===
      (e.target as HTMLDivElement).id;
    const conditionTwo =
      `empty-${e.dataTransfer.getData("index")}` ===
      (e.target as HTMLDivElement).id;
    if (!(conditionOne || conditionTwo)) {
      (e.target as HTMLDivElement).classList.replace("insight", "outsight");
    }
  };

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "none";
    if (
      !(
        `empty-${parseInt(e.dataTransfer.getData("index")) + 1}` ===
          (e.target as HTMLDivElement).id ||
        `empty-${e.dataTransfer.getData("index")}` ===
          (e.target as HTMLDivElement).id
      )
    ) {
      e.dataTransfer.dropEffect = "move";
    }
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("index", `${index}`);
    e.dataTransfer.setData("enter", "false");
    // (e.target as HTMLDivElement).style.display = "none";
  };

  const dragDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setChoices(
      moveElementIndexToIndex(choices, parseInt(e.dataTransfer.getData("index")), index)
    );
    console.log(choices, parseInt(e.dataTransfer.getData("index")), index);
    setToggle((prev) => (prev + 1) % 2);
  };

  const addOption = () => {
    const i = document.getElementById(
      "category-question-ans-input"
    ) as HTMLInputElement;
    if (i.value === "") return;
    choices.push(i.value);
    setChoices(choices);
    setToggle((prev) => (prev + 1) % 2);
  };

  const closeOption = (e: React.MouseEvent<SVGAElement>) => {
    setChoices(
      choices.filter(
        (item) =>
          item !==
          (
            (e.currentTarget as SVGAElement).parentNode as HTMLDivElement
          ).querySelector("span")?.innerText
      )
    );
    setToggle((prev) => (prev + 1) % 2);
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    templateQuestion.questionStatement = e.target.value;
    setQuestion(templateQuestion);
  };

  return (
    <div
      className={`w-8/12 h-auto min-h-[80%] flex flex-col justify-start items-start ${className}`}
    >
      <div id="cat-q">
        <input
          type="text"
          className="w-full h-auto bg-transparent focus:outline-none text-2xl mb-4 border-b-2 border-solid border-blue-700 py-2"
          placeholder="Type Your Question Here ..."
          onChange={changeOption}
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
            className="w-[200px] bg-transparent focus:outline-none text-2xl border-2 border-solid border-blue-700 py-2 px-1 rounded-md mr-2"
          />
          <button className="text-blue-700" onClick={addOption}>
            <AiOutlinePlusCircle size={37} />
          </button>
        </div>
        <div
          key={toggle}
          className="w-auto h-auto flex flex-col-reverse justify-start items-start mt-3"
        >
          <div
            id={`empty-0`}
            className="w-full item outsight"
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDragOver={dragOver}
            onDrop={(e) => dragDrop(e, -1)}
          ></div>
          {choices.map((value, index) => {
            const indexPlusOne = index + 1;
            return (
              <div key={`${value}-${index}`}>
                <div
                  id={`empty-${indexPlusOne}`}
                  className="w-auto item outsight"
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDragOver={dragOver}
                  onDrop={(e) => dragDrop(e, index)}
                ></div>
                <div
                  className="w-auto h-10 border-2 border-solid border-blue-700 items-center px-2 flex flex-row justify-start rounded-md hover:bg-slate-300 cursor-pointer"
                  draggable={true}
                  onDragStart={(e) => dragStart(e, index)}
                >
                  <MdOutlineDragIndicator
                    size={25}
                    className="border-r-2 border-solid border-blue-700 h-10/12 pr-1 w-auto"
                  />
                  <span className="mx-3">{value}</span>
                  <RxCrossCircled
                    size={25}
                    className="cursor-pointer"
                    onClick={closeOption}
                  />
                </div>
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
