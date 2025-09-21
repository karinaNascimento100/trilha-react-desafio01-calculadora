
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [expression, setExpression] = useState('');
  const [lastExpression, setLastExpression] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
    setExpression('')
    setLastExpression('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      if (prev === '0' || prev === 'Erro') return num;
      return `${prev}${num}`;
    })
  }

  
  const handlePercent = () => {
    setCurrentNumber(prev => {
      const n = Number(prev);
      if (Number.isNaN(n)) return prev;
      return String(n / 100);
    });
  };

  const handleBackspace = () => {
    setCurrentNumber(prev => {
      if (prev === '0' || prev === 'Erro') return '0';
      const next = prev.slice(0, -1);
      return next === '' || next === '-' ? '0' : next;
    });
  };

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
        setExpression(`${currentNumber} +`)
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      setExpression(`${firstNumber} + ${currentNumber}`)
    }

  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      setExpression(`${currentNumber} -`)
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
      setExpression(`${firstNumber} - ${currentNumber}`)
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
      setExpression(`${currentNumber} x`)
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
      setExpression(`${firstNumber} x ${currentNumber}`)
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      setExpression(`${currentNumber} /`)
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
      setFirstNumber('0');
      setExpression(`${firstNumber} / ${currentNumber}`)
    }
  };

  const handleEquals = () => {
    
    if (operation !== '') {
      const a = Number(firstNumber);
      const b = Number(currentNumber);
      let result;
      switch (operation) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case 'x':
          result = a * b;
          break;
        case '/':
          result = b === 0 ? 'Erro' : a / b;
          break;
        default:
          result = b;
      }
      const expr = `${firstNumber} ${operation} ${currentNumber}`;
      setCurrentNumber(String(result));
      setLastExpression(expr);
      setExpression('');
      setOperation('');
      setFirstNumber('0');
    }
  };
 
  return (
    <Container>
      <Content>
  <Input value={currentNumber} expression={expression || lastExpression} />
        <Column>
          <Row>
            <Button label="AC" onClick={handleOnClear} />
            <Button label="%" onClick={handlePercent} />
            <Button label="/" onClick={handleDivideNumbers} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="x" onClick={handleMultiplyNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="-" onClick={handleMinusNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')} />
            <Button label="⌫" onClick={handleBackspace} />
            <Button label="=" onClick={handleEquals} />
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default App;
