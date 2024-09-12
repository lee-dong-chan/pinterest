const Loading = (): JSX.Element => {
  return (
    <div className="py-5 w-screen h-screen flex items-center justify-center">
      <svg
        className="animate-spin"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="100"
          cy="100"
          r="80"
          stroke="gray"
          strokeWidth="15"
          fill="none"
        />
        <path
          className="opacity-50"
          fill="none"
          stroke="red"
          strokeWidth="15"
          d="
          M100,20
          A80,80 0 0,1 180,100
          L100,100
          Z
        "
        />
        <circle />
        <circle
          className=""
          cx="100"
          cy="100"
          r="75"
          stroke="gray"
          strokeWidth="0"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default Loading;
