const initialstate = {
    stack: "",
    res: "",
    baseCurrency : "EUR",
    targetCurrency : "INR",
    baseValue: "1",
    targetValue: "85.3805"
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'BACKSPACE':
            {
                return {
                    ...state,
                    stack: state.stack.slice(0, -1),
                    res: ""

                }
            }
        case 'RESET':
            {
                return {
                    ...state,
                    res: "",
                    stack: ""

                }
            }
        case 'CALCULATE':
            {
                return {
                    ...state,
                    // eslint-disable-next-line
                    res: (eval(state.stack))
                }
            }
        case 'OPERATIONS':
            {
                return {
                    ...state,
                    stack: state.res + action.button,
                    res:""
                }
            }
        case 'INPUTS':
            {
                return {
                    ...state,
                    stack: state.stack + action.button
                }
            }
        case 'AFTERRESULT': 
        {
            return {
                ...state,
                stack: action.button,
                res: ""
            }
        }
        case 'RESETCC':{
            return {
                ...state,
                baseValue: "0",
                targetValue: "0"
            }
        }
        case 'BACKSPACECC':{
            return {
                ...state,
                baseValue: state.baseValue.slice(0, -1),
                
            }
        }
        case 'INPUTVALUE1' :{
            return {
                ...state,
                baseValue : state.baseValue + action.button

            }
        }
        case 'UPADTE BASE CURRENCY' :{
            return {
                ...state,
                baseCurrency : action.currency

            }
        }
        case 'UPADTE TARGET CURRENCY' :{
            return {
                ...state,
                targetCurrency : action.currency

            }
        }
        case 'UPADTE TARGET VALUE' :{
            return {
                ...state,
                targetValue : action.value

            }
        }
        default : {
            return state;
        }
    }
};

export default reducer;