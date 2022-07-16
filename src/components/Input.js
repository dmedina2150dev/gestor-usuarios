import './Input.css';

const Input = ({ label, ...rest}) => {

    return (
        <div className='field'>
            <label>{label}</label>
            <input
                type="text"
                {...rest}
            />
        </div>
    )
}

export default Input;