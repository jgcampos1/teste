import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Button, InterfaceButton } from "../button";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
  description?: string;
  primaryButton?: InterfaceButton;
  secondaryButton?: InterfaceButton;
  loading?: boolean;
  hiddenFooter?: boolean;
}
export const Modal = ({
  children,
  title,
  description,
  open,
  onClose,
  primaryButton,
  secondaryButton,
  loading,
  hiddenFooter = false,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description} </DialogDescription>}
          {children && <div className="py-2">{children}</div>}
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          {!hiddenFooter && (
            <>
              <Button
                {...secondaryButton}
                onClick={onClose}
                variant={secondaryButton?.variant || "secondary"}
                title={secondaryButton?.title || "Cancel"}
                loading={loading}
              />
              {primaryButton && <Button {...primaryButton} loading={loading} />}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
