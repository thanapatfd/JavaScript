// LibArea.js
function areaTriangle(b, h) {
    return b * h / 2;
}

function areaCircle(r) {
    return Math.PI * r * r;
}

function areaSqrt(w, l) {
    return w * l;
}

export { areaCircle, areaSqrt, areaTriangle };