import { Controller, useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { Modal } from "../modal";
import { resolver, ChangeColorSchema } from "./schema";
import { useTranslation } from "../../hooks/use-translation";
import { Info } from "@phosphor-icons/react";

import { generatePalette } from "../../styles/generate-palette";

interface Props {
  open: boolean;
  onClose: () => void;
}
export const ModalChangeColor = ({ onClose, open }: Props) => {
  const { translate } = useTranslation("exception");
  // const { palette, setPalette } = usePaletteStore();

  const { control, handleSubmit } = useForm({
    resolver,
    defaultValues: {
      color: "#141485",
    },
  });

  const onSubmit = (values: ChangeColorSchema) => {
    console.log("Save", values);

    const colors = generatePalette(values?.color);
    console.log("colors", colors);
  };

  return (
    <form>
      <Modal
        open={open}
        onClose={onClose}
        title="Change Color"
        primaryButton={{
          onClick: handleSubmit(onSubmit),
          title: "Save",
          type: "submit",
        }}
      >
        <Controller
          name="color"
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <Input
                  type="color"
                  name="das"
                  value={field.value}
                  onChange={field.onChange}
                  label="Color"
                />
                {error && (
                  <div className="flex gap-1 items-center">
                    <Info size={16} className="text-red-500" />
                    <span className="text-red-500 text-sm">
                      {translate(error?.message ?? "")}
                    </span>
                  </div>
                )}{" "}
              </>
            );
          }}
        />
      </Modal>
    </form>
  );
};
