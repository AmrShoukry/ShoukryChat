const Loader = () => {
  return (
    <div className="absolute w-[100vw] h-[100vh] left-0 top-0 bg-theme z-50 flex items-center justify-center flex-col">
      <div className="rounded-full h-20 w-20 bg-primary animate-ping"></div>
      <p className="mt-[64px]">Loading...</p>
    </div>
  );
};

export default Loader;

