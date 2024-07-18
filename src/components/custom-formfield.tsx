// CustomFormField.tsx
import { Controller, FieldValues, FieldPath, Control } from "react-hook-form";
import { ReactNode } from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import useController from "../utils/hooks/useControler";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  options?: unknown[];
  description?: string;
  control: Control<T>;
}

interface ChildrenProps<T extends FieldValues> extends Props<T> {
  children: (field: { onChange: (value: any) => void; onBlur: () => void; value: any; name: string; ref: (instance: any) => void }) => ReactNode;
}

const CustomFormField = <T extends FieldValues>({ name, label, description, children }: ChildrenProps<T>) => {
  const control = useController();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormField
          name={name}
          render={() => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>{children(field)}</FormControl>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    />
  );
};

export { CustomFormField };
