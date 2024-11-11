'use client';

interface AddFormProps {
    action: (formData: FormData) => Promise<void>;
}

const AddForm: React.FC<AddFormProps> = ({ action }) => {
    return (
        <form action={action}>
        <label>
            Name:
            <input type="text" name="name" required />
        </label>
        <label>
            Age:
            <input type="number" name="age" required />
        </label>
        <label>
            Email:
            <input type="email" name="email" required />
        </label>
        <button type="submit">Add</button>
        </form>
    );
};

export default AddForm;
