const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const symbols = "/*-+/.,?><';:|][=-)(&^%$#@!~`";

const copyContent = async () => {
    let text = document.querySelector('#password').value

    try {
        await navigator.clipboard.writeText(text);
        alert('Copied !')
    }
    catch (error) {
        console.error(error)
    }
}

function generatePassword() {
    async function getPassCharacter() {
        try {

            function checkUpperCase(param1) {
                if (param1 == true) {
                    return upperCase;
                }
                else return "#"
            }
            function checkLowerCase(param2) {
                if (param2 == true) {
                    return lowerCase;
                }
                else return "#";
            }
            function checkNumeric(param3) {
                if (param3 == true) {
                    return numeric;
                }
                else return "#";
            }
            function checkSymbol(param4) {
                if (param4 == true) {
                    return symbols;
                }
                else return "#";
            }

            const upr = checkUpperCase(isUpperCaseChecked)
            const lwr = checkLowerCase(isLowerCaseChecked)
            const num = checkNumeric(isNumericChecked)
            const sym = checkSymbol(isSymbolsChecked)

            return (upr + lwr + num + sym);
        }

        catch (error) {
            console.error(error);
        }
    }

    const isUpperCaseChecked = document.getElementById("UpperCase").checked;
    const isLowerCaseChecked = document.getElementById("LowerCase").checked;
    const isNumericChecked = document.getElementById("Numeric").checked;
    const isSymbolsChecked = document.getElementById("Symbols").checked;

    getPassCharacter().then((value) => {
        const passArray = Array.from(value);
        const passLength = document.querySelector('#length').value;
        let finalPassword = Array();
        for (let i = 0; i < passLength; i++) {
            let index = Math.floor(Math.random() * passArray.length);
            finalPassword.push(passArray[index]);
        }

        document.querySelector('#password').value = finalPassword.join('');

    });
}

document.querySelector('#submit').addEventListener('click', generatePassword)

document.querySelector('#length').addEventListener('change', (e) => {
    document.querySelector("#passwordLength").value = e.target.value
})

document.querySelector('#copyPass').addEventListener('click', copyContent)


