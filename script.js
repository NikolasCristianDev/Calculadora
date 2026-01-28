const display = document.getElementById('display');

    function appendToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            // eval() processa a string matemática. 
            // Em projetos complexos, usa-se um parser próprio por segurança.
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Erro";
            setTimeout(clearDisplay, 1500);
        }
    }