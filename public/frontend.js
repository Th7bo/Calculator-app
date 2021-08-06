const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', function(event){
    calculate('add');
});

subtractButton.addEventListener('click', function(event){
    calculate('subtract');
});

function calculate(operand){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    const apiUrl = '/calc/' + operand + '/' + number1 + '/' + number2;
    getResultFromApi(apiUrl);

}

function getResultFromApi(apiUrl){
    let fetchOptions = {
        method: 'GET'
      };
      
    fetch(apiUrl, fetchOptions)
        .then(res => {
            return res.json();
        })
        .then(res => {
            document.getElementById('result').innerHTML = 'The result is: ' + res;
        });

}