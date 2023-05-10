import { CardContainer } from "./styles";

type CardProps = {
  text: string;
};

export const Cart = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
