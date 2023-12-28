import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import '../Calculator/CalculatorApp.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    default:
      return state;
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;

    default:
      return computation;
  }

  return computation.toString();
}

export const CalculatorApp = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>

      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />

      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />

      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />

      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
  // -------- MOJE PRÓBY ---------------
  // const [number, setNumber] = useState(0);
  // const handleAdd = () => {
  //   const sum = number + 4;
  //   return sum;
  // };
  // const handleClick = (e) => {
  //   setNumber(e.target.value);
  // };
  // const allClear = () => {};
  // const deleteLastValue = () => {};
  // const changeValue = () => {};
  // const division = () => {};
  // const multiplication = () => {};
  // const subtraction = () => {};
  // const addition = () => {};
  // const getPercent = () => {};
  // const sumUp = () => {};
  // const listOfButtons = [
  //   {
  //     id: 1,
  //     name: 'AC',
  //     function: allClear(),
  //   },
  //   {
  //     id: 2,
  //     name: 'Del',
  //     function: deleteLastValue(),
  //   },
  //   {
  //     id: 3,
  //     name: '+/-',
  //     function: changeValue(),
  //   },
  //   {
  //     id: 4,
  //     name: ':',
  //     function: division(),
  //   },
  //   {
  //     id: 5,
  //     name: '7',
  //     function: () => {
  //       return 7;
  //     },
  //   },
  //   {
  //     id: 6,
  //     name: '8',
  //     function: () => {
  //       return 8;
  //     },
  //   },
  //   {
  //     id: 7,
  //     name: '9',
  //     function: () => {
  //       return 9;
  //     },
  //   },
  //   {
  //     id: 8,
  //     name: '*',
  //     function: multiplication(),
  //   },
  //   {
  //     id: 9,
  //     name: '4',
  //     function: () => {
  //       return 4;
  //     },
  //   },
  //   {
  //     id: 10,
  //     name: '5',
  //     function: () => {
  //       return 5;
  //     },
  //   },
  //   {
  //     id: 11,
  //     name: '6',
  //     function: () => {
  //       return 6;
  //     },
  //   },
  //   {
  //     id: 12,
  //     name: '-',
  //     function: subtraction(),
  //   },
  //   {
  //     id: 13,
  //     name: '1',
  //     function: () => {
  //       return 1;
  //     },
  //   },
  //   {
  //     id: 14,
  //     name: '2',
  //     function: () => {
  //       return 2;
  //     },
  //   },
  //   {
  //     id: 15,
  //     name: '3',
  //     function: () => {
  //       return 3;
  //     },
  //   },
  //   {
  //     id: 16,
  //     name: '+',
  //     function: addition(),
  //   },
  //   {
  //     id: 17,
  //     name: '%',
  //     function: getPercent(),
  //   },
  //   {
  //     id: 18,
  //     name: '0',
  //     function: () => {
  //       return 0;
  //     },
  //   },
  //   {
  //     id: 19,
  //     name: ',',
  //     function: () => {
  //       return ',';
  //     },
  //   },
  //   {
  //     id: 20,
  //     name: '=',
  //     function: sumUp(),
  //   },
  // ];
  // return (
  //   <>
  //     {listOfButtons.map((el) => (
  //       <div id={el.id} onClick={() => el.function()} className="cal-button">
  //         {el.name}
  //       </div>
  //     ))}
  //   </>
  //   <div>
  //     <div className="display">{number}</div>
  //     <button onClick={handleAdd}>+</button>
  //     <button value={1} onClick={handleClick}>
  //       1
  //     </button>
  //     <button value={2} onClick={handleClick}>
  //       2
  //     </button>
  //     <button value={3} onClick={handleClick}>
  //       3
  //     </button>
  //     <button value={4} onClick={handleClick}>
  //       4
  //     </button>
  //   </div>
  // );
  // ------------------------------------------------------
};
