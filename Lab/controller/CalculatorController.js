// calculatorController.js (Client-side)

function getResult(operationRoute) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    fetch(`/calculator/${operationRoute}?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = data.result;
        })
        .catch(error => console.error('Error:', error));
}
