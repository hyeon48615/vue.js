export function mul(i , j) {
    return i  * j;
}
export function divi(i, j) {
    return i / j;
}

// default 메서드는 호출하는 쪽으로 자동으로 넘어간다.
export default {
    title: "계산기 모듈",
    add: function (i, j) {
        return i + j;
    },
    sub(i , j) {
        return i - j;
    }
}