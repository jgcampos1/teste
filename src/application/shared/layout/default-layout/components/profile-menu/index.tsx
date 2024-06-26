import { SignOut } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { Item, MenuItem } from "~/application/shared/components/menu-item";
import { ProfileIcon } from "~/application/shared/components/profile-icon";
import { useAuth } from "~/application/shared/hooks/use-auth";
import { useTranslation } from "~/application/shared/hooks/use-translation";

export const ProfileMenu = () => {
  const { logout, user } = useAuth();
  const { translate } = useTranslation("common");

  const { setTheme, theme } = useTheme();
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
      label: translate("Tema"),
      onClick: () => {},
      subItems: [
        {
          variant: theme === "light" ? "primary" : "default",
          label: "Claro",
          onClick: () => {
            setTheme("light");
          },
        },
        {
          variant: theme === "dark" ? "primary" : "default",

          label: "Escuro",
          onClick: () => {
            setTheme("dark");
          },
        },
        {
          variant: theme === "system" ? "primary" : "default",
          label: "Sistema",
          onClick: () => {
            setTheme("system");
          },
        },
      ],
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
    <>
      <MenuItem items={items}>
        <ProfileIcon name={user?.name} />
      </MenuItem>
    </>
  );
};
