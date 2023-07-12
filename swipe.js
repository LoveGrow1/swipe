window.onload = function() {
    const buttons = {
        "left": document.getElementById('no'),
        "right": document.getElementById('yes'),
        "up": document.getElementById('dont-know')
    };
    let startX, startY;
    document.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
    }, false);
    document.addEventListener('touchmove', (e) => {
        let distX = e.changedTouches[0].clientX - startX;
        let distY = e.changedTouches[0].clientY - startY;
        if (Math.abs(distX) >= 30 || Math.abs(distY) >= 30) {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 500);
        }
        if (Math.abs(distX) > Math.abs(distY)) {
            if (distX > 0) {
                buttons.right.style.transform = `scale(${1 + Math.abs(distX)/100})`;
            } else {
                buttons.left.style.transform = `scale(${1 + Math.abs(distX)/100})`;
            }
        } else {
            if (distY > 0) {
                buttons.up.style.transform = `scale(${1 + Math.abs(distY)/100})`;
            }
        }
    }, false);
};
