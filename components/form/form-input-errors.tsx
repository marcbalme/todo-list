interface FormErrorsProps {
    id: string;
    errors?: Record<string, string[] | undefined>;
}

const FormInputErrors = ({ id, errors }: FormErrorsProps) => {
    if (!errors) {
        return null;
    }

    return (
        <div
            id={`${id}-error`}
            aria-live="polite"
            className="mt-1 text-xs text-red-500"
        >
            {errors?.[id]?.map((error: string) => (
                <div key={error} className="font-bold text-xs">
                    {error}
                </div>
            ))}
        </div>
    );
};

FormInputErrors.displayName = "FormInputErrors";

export { FormInputErrors };
