/*
    -Các bước làm:
    B1: Lấy random phần tử trong mảng
    B2: Lấy arr[index]
    B3: arr[index].length -> Lấy độ dài của từ vừa tìm thấy
    B4: Hiển thị ra giao diện
    B5: Tạo 1 function

*/

let arr = ["hoa", "hao", "han", "nam", "anh", "tan", "thu", "tai", "tho"];
let random = arr[Math.floor(Math.random() * arr.length)];
let chosenWord;
let guessedWord = [];
let remainingGuesses;

function initializeGame() {
    chosenWord = random;
    guessedWord = Array(chosenWord.length).fill('*');
    remainingGuesses = chosenWord.length + 0;
    updateGame();
}

function updateGame() {
    document.getElementById("word").textContent = "Current word: " + guessedWord.join(' ');
    document.getElementById("remainingGuesses").textContent = remainingGuesses;
}

function checkGame() {
    if (!guessedWord.includes('*') || remainingGuesses === 0) {
        let message = "";
        if (!guessedWord.includes('*')) {
            message = "Bạn đã đoán đúng từ: " + chosenWord;
        } else {
            message = "Bạn đã đoán sai từ đó là: " + chosenWord;
        }
        alert(message);
    }
}

function guess() {
    let input = document.getElementById("guessInput").value.toLowerCase();
    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === input) {
            guessedWord[i] = input;
            found = true;
        }
    }
    if (!found) {
        remainingGuesses--;
    }
    updateGame();
    checkGame();
}
initializeGame();


      
    




