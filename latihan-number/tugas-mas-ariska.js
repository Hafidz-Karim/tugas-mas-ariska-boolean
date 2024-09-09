
// function untuk membalikan index
function reverseString(str) {

    let dataString = str.length
    return dataString;
}
console.log(reverseString("javascript"));

// function untuk menghitung panjang string
function reverseString2(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString2("hello"));


//Function  mengganti semua kemunculan string
function replaceSubstring(str, search, replacement) {
    return str.replace(new RegExp(search, 'g'), replacement);
};

console.log(replaceSubstring("hello world", "world", "JavaScript"));


// Function untuk memeriksa apakah string mengandung sustring
function containsSubstring(str, substr) {
    return str.includes(substr);
};

console.log(containsSubstring("hello world", "world"));


// Function untuk membesarkan huruf
function toUpperCase(str) {
    return str.toUpperCase();
};
console.log(toUpperCase("hello"));


// Funtion untuk mengecilkan huruf
function toLowwerCase(str) {
    return str.toLowerCase();
}
console.log(toLowwerCase("HELLO"));