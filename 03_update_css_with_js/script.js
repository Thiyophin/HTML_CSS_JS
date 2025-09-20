const inputs = document.querySelectorAll('input');

const handleChange = ({ target }) => {
  const { name, value, dataset } = target;
  const suffix = dataset.sizing || '';
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

inputs.forEach(input => {
    ['change', 'mousemove'].forEach(event => {
        input.addEventListener(event, handleChange);
    });
});
