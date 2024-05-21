import { cn } from "../../lib/utils";

interface Props {
  title: string;
  color?: string;
}
export const TitlePage = ({ title, color = "text-primary-500" }: Props) => {
  return <h1 className={cn("text-4xl", color)}>{title}</h1>;
};
