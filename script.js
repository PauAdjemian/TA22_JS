function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('windowSize').textContent = `Window size: ${width}px x ${height}px`;
}

window.addEventListener('resize', updateWindowSize);


updateWindowSize();