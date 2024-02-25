import { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetOverlay>
          <SheetContent className="w-[300px] sm:w-[340px]" side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter> SheetFooter </SheetFooter>
            <SheetClose> SheetClose </SheetClose>
            <SheetPortal> SheetPortal </SheetPortal>{" "}
          </SheetContent>
        </SheetOverlay>
      </Sheet>

      {children}
    </>
  );
};

export default DefaultLayout;
