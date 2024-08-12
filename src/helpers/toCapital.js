export function toCapital(str) {
    // Verifica que str es una cadena y no está vacía
    if (typeof str === 'string' && str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    // Maneja el caso cuando str no es una cadena válida
    return '';
}