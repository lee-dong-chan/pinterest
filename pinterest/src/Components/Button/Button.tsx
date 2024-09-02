interface IProps {
  width?: string;
  height?: string;
  text?: string;
  color?: string;
  size?: string;
  back?: string;
}

const Button = ({
  width,
  height,
  text,
  color,
  size,
  back,
}: IProps): JSX.Element => {
  return (
    <div
      className={`flex items-center justify-center ${width} ${height} ${color} ${size} ${back} border rounded-[1rem]`}
    >
      {text}
    </div>
  );
};
export default Button;

export const Smallbutton = ({ text, back, color }: IProps) => {
  return (
    <Button
      width="w-[4rem]"
      height="h-[2.5rem]"
      text={text}
      back={back}
      color={color}
      size="text-[1rem]"
    />
  );
};

export const Middlebutton = ({ text, back, color }: IProps): JSX.Element => {
  return (
    <Button
      width="w-[20rem]"
      height="h-[3rem]"
      text={text}
      back={back}
      color={color}
      size="text-[1rem]"
    />
  );
};
