const Form = ({ onSubmit, value, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={value} onChange={onChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form