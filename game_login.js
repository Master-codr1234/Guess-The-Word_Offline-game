function load_content() {
    if(localStorage.getItem("Guess The Word Game Player 1")) {
        document.getElementById("player_1_name").value = localStorage.getItem("Guess The Word Game Player 1");
        document.getElementById("player_2_name").value = localStorage.getItem("Guess The Word Game Player 2");
    }
}

function add_User() {
    var player_1_name = document.getElementById("player_1_name").value;
    var player_2_name = document.getElementById("player_2_name").value;

    localStorage.setItem("Guess The Word Game Player 1", player_1_name);
    localStorage.setItem("Guess The Word Game Player 2", player_2_name);

    window.location.replace("game_page.html");
}