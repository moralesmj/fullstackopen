const Filter = ({ term, handleTermChange }) =>
    <div>
        filter shown with <input
            value={term}
            onChange={handleTermChange} />
    </div>

export default Filter