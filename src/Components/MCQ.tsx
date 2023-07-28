interface Props {
  classname: string;
  index: number;
  question: string;
  options: string[];
  input?: string;
  getMcqAnswer(ans: string): void;
}

const MCQ = ({ classname, index, question, options, input, getMcqAnswer }: Props) => {
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

  const onOptionClick = (e: any, value: string) => {
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
          getMcqAnswer(value);
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
        <div className="h-auto w-auto flex flex-col justify-between items-start">
          {options.map((option: string) => {
            return (
              <div
                key={option}
                className="border-2 border-solid text-blue-700 border-black my-2 px-4 py-2 rounded-lg min-w-[150px] cursor-pointer bg-blue-200 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-75"
                onClick={(e) => onOptionClick(e, option)}
                style={{
                  backgroundColor: (input === option)? "rgb(29, 78, 216)" : "rgb(191, 219, 254)",
                  color: (input === option)? "white" : "rgb(29, 78, 216)",
                }}
              >
                {option.toLocaleUpperCase()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

MCQ.defaultProps = {
  input: ""
}

export default MCQ;
