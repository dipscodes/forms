interface Props {
  className?: string;
  // index: number;
  // question: string;
  // options: string[];
  addCategoryQuestion(ans: string): void;
}

const CategoryFormBuilder = ({className, addCategoryQuestion}: Props) => {
  return (
    <div>
      <div id="cat-q">
        <input
          type="text"
          className="w-full h-auto bg-transparent focus:outline-none text-2xl mb-4 border-b-2 border-solid border-blue-700 py-2"
          placeholder="Type Your Question Here ..."
          onChange={(e) => addCategoryQuestion(e.target.value)}
        />
      </div>
      <div id="categories"></div>
      <div id="answers"></div>
      <div id="cat-ans-map"></div>
    </div>
  )
}

CategoryFormBuilder.defautlProps = {
  className: ""
}

export default CategoryFormBuilder;