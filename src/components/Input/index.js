
import { InputContainer } from './styles';

const Input = ({ value, expression }) => {
  return (
    <InputContainer>
      {expression ? <div className="expression">{expression}</div> : <div className="expression" />}
      <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;