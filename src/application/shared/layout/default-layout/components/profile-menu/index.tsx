import { SignOut } from "@phosphor-icons/react";
import { Item, MenuItem } from "~/application/shared/components/menu-item";
import { ProfileIcon } from "~/application/shared/components/profile-icon";
import { useAuth } from "~/application/shared/hooks/use-auth";
import { useTranslation } from "~/application/shared/hooks/use-translation";

export const ProfileMenu = () => {
  const { logout, user } = useAuth();
  const { translate } = useTranslation("common");
  const items: Item[] = [
    {
      label: translate("profileMenu.profile"),
      onClick: () => {},
    },
    {
      label: translate("profileMenu.settings"),
      onClick: () => {},
    },
    {
      label: translate("profileMenu.changePassword"),
      onClick: () => {},
    },
    {
      label: translate("profileMenu.logout"),
      onClick: () => {
        logout();
      },
      variant: "destructive",
      icon: <SignOut size={16} />,
    },
  ];
  return (
    <MenuItem items={items}>
      <ProfileIcon name={user?.name} />
    </MenuItem>
  );
};
