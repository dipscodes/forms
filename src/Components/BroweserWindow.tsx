import Display from "./Display";

const BrowserWindow = () => {
  return (
    <div className="w-screen h-screen bg-stone-200 overflow-y-scroll hidden-scrollbar">
      <Display />
    </div>
  );
};

export default BrowserWindow;
