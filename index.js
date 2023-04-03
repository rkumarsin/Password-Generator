
const outputOne = document.getElementById("output-one");
const outputTwo = document.getElementById("output-two");
const generatePass = document.getElementById("generate");
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
     "{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];
    function generatePassword() {
        const passwordLenght = 10 ; // LENGHT 
        let password = "";
        for (let i = 0; i < passwordLenght ; i++) {
            const random = Math.floor(Math.random() * characters.length);
            password += characters[random];
            
        }
        return password;
    }
      
      generatePass.addEventListener("click", function() {
        const passwordOne = generatePassword(); // Generate a password with 10 characters
        const passwordTwo = generatePassword(); // Generate another password with 10 characters
        outputOne.textContent = passwordOne;
        outputTwo.textContent = passwordTwo;
      });


