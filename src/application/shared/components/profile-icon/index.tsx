import { cn } from "../../lib/utils";
import { avatarUrlGenerate } from "../../ultils/helpers/avatar-url-generate";

interface Props {
  name?: string;
  avatarUrl?: string;
  size?: number;
}
export const ProfileIcon = ({ avatarUrl, name, size = 10 }: Props) => {
  return (
    <img
      src={avatarUrl || avatarUrlGenerate(name, size)}
      className={cn(
        "rounded-full cursor-pointer",
        size && `w-${size} h-${size}`
      )}
    />
  );
};
