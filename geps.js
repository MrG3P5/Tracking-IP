/*evil

* Hanya gabut:v

* Don't be a script kidde:)
*/

// MODULE
const readline = require('readline');
const chalk = require('chalk');
const ip2location = require('ip-to-location');

// INPUT OUTPUT
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// COLOR
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
// MY FUNCTION
function track(ip) {
    ip2location.fetch(ip, function (err, res) {
        if (err) {
            return err;
        } else {
            return res;
        }
    })
}


// BANNER
console.clear()
console.log(color("..............", 'red'))
console.log(color("            ..,;:ccc,.", 'red'))
console.log(color("          ......''';lxO.", 'red'))
console.log(color(".....''''..........,:ld;", 'red'))
console.log(color("           .';;;:::;,,.x,", 'red'))
console.log(color("      ..'''.            0Xxoc:,.  ...", 'red'))
console.log(color("  ....                ,ONkc;,;cokOdc',.", 'red'))
console.log(color(" .                   OMo           ':ddo.", 'red'))
console.log(color("                    dMc               :OO;", 'red'))
console.log(color("                    0M.                 .:o.", 'red'))
console.log(color("                    ;Wd", 'red'))
console.log(color("                     ;XO,", 'red'))
console.log(color("                       ,d0Odlc;,..", 'red'))
console.log(color("                           ..',;:cdOOd::,.", 'red'))
console.log(color("                                    .:d;.':;.", 'red'))
console.log(color("                                       'd,  .'", 'red'))
console.log(color("                                         ;l   ..", 'red'))
console.log(color("                                          .o", 'red'))
console.log(color("    [=] Made by : X - MrG3P5 [=]            ", 'cyan'), color("c", "red"))
console.log(color("    [=] Version : 1.0        [=]             ", 'cyan'), color(".'", "red"))
console.log(color("                                              ", 'cyan'), color(".'", "red"))
console.log('')
console.log('')

// USER INPUT QUESTION 
var recursiveAsyncReadLine = function () {
    rl.question('\033[1;36mIP: \033[1;32m', function (userInput) {
        if (userInput == 'exit' || userInput == 'Exit' || userInput == 'EXIT' || userInput == '') {
            console.log('See you...^.^')
            process.exit();
        }
        ip2location.fetch(userInput, function (err, res) {
            console.log(res)
                recursiveAsyncReadLine();
        })
    })
} // CALLBACK INPUT
recursiveAsyncReadLine();
