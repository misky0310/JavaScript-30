const inputs=document.querySelectorAll(".controls input")

const handleUpdate = (e) => {
    const suffix=e.target.dataset.sizing || '';
    const value=(e.target.value);
    const targetName=(e.target.name);
    document.documentElement.style.setProperty(`--${targetName}`,value+suffix)
}

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate)
});
