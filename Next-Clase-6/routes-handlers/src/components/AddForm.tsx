interface AddFormProps {
    sendForm: () => Promise<void>;
}

const AddForm: React.FC<AddFormProps> = ({ sendForm }) => {
    return (
        <form action={sendForm}>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Age:
            <input type="number" name="age" />
        </label>
        <label>
            Email:
            <input type="email" name="email" />
        </label>
        <button type="submit">Add</button>
        </form>
    );
};

export default AddForm;
