function calculator() {
    // constants
    const PLUS_SIGN = "+";
    const MINUS_SIGN = "-";
    // dictionary
    const HTML = { 
        s1: "",
        s2: "",
        output: "",

    };
    const OPERANDS = { [PLUS_SIGN] : (a,b) => a + b,
         [MINUS_SIGN]: (a,b) => a - b};
    // helper function
    function calc(s1Value, s2Value, operand) {
        return OPERANDS[operand](Number(s1Value), Number(s2Value));
    }


    return {
        init: (selector1,selector2,resultSelector) => {
            HTML.s1 = document.querySelector(selector1);
            HTML.s2 = document.querySelector(selector2);
            HTML.output = document.querySelector(resultSelector);
        },
        add: () => {
            HTML.output.value = calc(HTML.s1.value, HTML.s2.value, [PLUS_SIGN]);
        },
        subtract: () => {HTML.output.value = calc(HTML.s1.value, HTML.s2.value, [MINUS_SIGN]);},
    }
}


const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');



