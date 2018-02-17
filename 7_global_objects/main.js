/**
 * GLOBAL OBJECTS
 */

// cetak nilai __filename
console.log("value of __filename: " + __filename);


// cetak nilai __dirname
console.log("value of __dirname: " + __dirname);


// setTimeout() => menjalankan fungsi setelah waktu yg ditentukan
function printHello() {
    console.log("Hello World!");
}

setTimeout(printHello, 2000); // panggil printHello setelah 2 detik


// clearTimeout() => menghentikan efek setTimeout()
var timeoutId = setTimeout(function() {
    console.log("Timer yang dimatikan dengan clearTimeout() => tidak akan dicetak");
}, 2000);

clearTimeout(timeoutId);


// setInterval() => menjalankan sebuah fungsi setiap beberapa waktu sekali
// clearInterval() => menghentikan efek setInterval()
var count = 1;
var interId = setInterval(function() {
    if (count > 10) {
        clearInterval(interId);
        console.log("setInterval() telah dimatikan menggunakan clearInterval().");
    } else {
        console.log("interval ke-" + count);
    }
    count++;    
});