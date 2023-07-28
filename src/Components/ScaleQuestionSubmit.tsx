interface Props {
  classname: string;
  index: number;
  question: string;
  getScaleAnswer(ans: number): void;
}

const ScaleQuestionSubmit = ({ classname, index, question, getScaleAnswer }: Props) => {
  const numbers: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  const mouseEnter = (event: MouseEvent) => {
    (event.target as HTMLDivElement).style.backgroundColor =
      "rgb(59, 130, 246)";
    (event.target as HTMLDivElement).style.color = "white";
  };
  const mouseLeave = (event: MouseEvent) => {
    (event.target as HTMLDivElement).style.backgroundColor =
      "rgb(191, 219, 254)";
    (event.target as HTMLDivElement).style.color = "rgb(29, 78, 216)";
  };

  const onOptionClick = (e: any, value: number) => {
    const targetElement = e.target as HTMLDivElement;

    if (
      window.getComputedStyle(targetElement).backgroundColor ===
      "rgb(59, 130, 246)"
    ) {
      const parentElement = targetElement.parentNode as HTMLElement;
      const childElements = parentElement.children;
      const siblingElements = Array.from(childElements) as HTMLElement[];
      siblingElements.forEach((element) => {
        if (element === targetElement) {
          getScaleAnswer(value);
          element.style.backgroundColor = "rgb(37, 99, 235)";
          element.style.color = "white";
          element.removeEventListener("mouseenter", mouseEnter);
          element.removeEventListener("mouseleave", mouseLeave);
        } else {
          element.style.backgroundColor = "rgb(191, 219, 254)";
          element.style.color = "rgb(29, 78, 216)";
          element.addEventListener("mouseenter", mouseEnter);
          element.addEventListener("mouseleave", mouseLeave);
        }
      });
    }
    if (
      window.getComputedStyle(targetElement).backgroundColor ===
      "rgb(37, 99, 235)"
    ) {
      console.log("sme");
      const parentElement = targetElement.parentNode as HTMLElement;
      const childElements = parentElement.children;
      const siblingElements = Array.from(childElements) as HTMLElement[];
      siblingElements.forEach((element) => {
        if (element === targetElement) {
          element.style.backgroundColor = "rgb(191, 219, 254)";
          element.style.color = "rgb(29, 78, 216)";
          element.addEventListener("mouseenter", mouseEnter);
          element.addEventListener("mouseleave", mouseLeave);
        } else {
          element.style.backgroundColor = "rgb(191, 219, 254)";
          element.style.color = "rgb(29, 78, 216)";
          element.addEventListener("mouseenter", mouseEnter);
          element.addEventListener("mouseleave", mouseLeave);
        }
      });
    }
  };

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
                className="h-full w-[60px] mx-1 bg-blue-200 rounded-md border-2 border-solid border-blue-900 flex flex-row justify-center items-center cursor-pointer text-blue-700 text-xl hover:bg-blue-500 hover:text-white transition-all duration-75 ease-in-out"
                onClick={(e) => onOptionClick(e, value)}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScaleQuestionSubmit;
