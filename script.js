document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons button');
    const display = document.getElementById('display');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DE') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
