import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { FormInputErrors } from "./form-input-errors";

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    defaultValue?: string;
    onBlur?: () => void;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    (
        {
            id,
            label,
            type,
            placeholder,
            required,
            disabled,
            errors,
            className,
            defaultValue,
            onBlur,
        },
        ref
    ) => {
        const { pending } = useFormStatus();
        return (
            <div className="flex flex-1 flex-col">
                {label && <Label htmlFor={id}>label</Label>}
                <Input
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    ref={ref}
                    required={required}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    disabled={pending || disabled}
                    className={className}
                    aria-describedby={`${id}-error`}
                />
                <FormInputErrors id={id} errors={errors} />
            </div>
        );
    }
);

FormInput.displayName = "FormInput";

export { FormInput };
