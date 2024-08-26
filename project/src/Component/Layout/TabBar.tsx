interface IProps {}

const TabBar = ({}: IProps): JSX.Element => {
  return (
    <div className="p-5 fixed top-0 w-[100%]  text-[1.5rem] text-gray-500 flex justify-evenly border border-b"></div>
  );
};

export default TabBar;
