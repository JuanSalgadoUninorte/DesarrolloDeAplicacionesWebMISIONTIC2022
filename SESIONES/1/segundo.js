function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if(b == 0){
        return "Error, no se puede dividir por 0";
    }else
    return a / b;
}
exports.sumar = sumar;
exports.restar = restar;
exports.mul = mul;
exports.div = div;