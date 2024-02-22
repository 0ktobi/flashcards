const card = document.querySelector('.card');
const solution = document.querySelector('.solution')
const sButton = document.querySelector('#sButton');
const qButton = document.querySelector('#qButton');

maths = {
    'f(x)': 'x^2',
    'g(x)': '\\sqrt{x}',
    'h(x)': '\\exp(x)=e^x',
    '\\int_a^b dx f(x)': 'F(b)-F(a)'
}

equations = Object.entries(maths)

function getRandomFunc() {
    randomFunc = equations[Math.floor(Math.random() * equations.length)];
    card.innerHTML = `<p>\\(${randomFunc[0]}\\)</p>`;
    solution.innerHTML = `<p>\\(${randomFunc[1]}\\)</p>`;
    MathJax.typeset([card]);
    MathJax.typeset([solution]);
}


sButton.addEventListener('click', function() {
    card.style.display = 'none';
    solution.style.display = 'block';
    sButton.style.display = 'none';
    qButton.style.display = 'block';
});

qButton.addEventListener('click', function() {
    card.style.display = 'block';
    solution.style.display = 'none';
    sButton.style.display = 'block';
    qButton.style.display = 'none';
});