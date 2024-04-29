let robotChoices = ['Rock', 'Paper', 'Scissors'];

const playGame = (humanChoice) => {
    const robotIndex = Math.floor(Math.random() * 3);
    const robotChoice = robotChoices[robotIndex];

    alert(`You chose: ${humanChoice}\nRobot chose: ${robotChoice}`);

    if (humanChoice === "Rock") {
        if (robotChoice === "Scissors") {
            alert("Human wins!");
            scoringFunction("Human");
        } else if (robotChoice === "Paper") {
            alert("Robot wins!");
            scoringFunction("Robot");
        } else if (robotChoice === "Rock") {
            alert("It's a tie");
        } else {
            alert("Invalid choice for Robot");
        }
    }

    if (humanChoice === "Paper") {
        if (robotChoice === "Rock") {
            alert("Human wins!");
            scoringFunction("Human");
        } else if (robotChoice === "Scissors") {
            alert("Robot wins!");
            scoringFunction("Robot");
        } else if (robotChoice === "Paper") {
            alert("It's a tie");
        } else {
            alert("Invalid choice for Robot");
        }
    }

    if (humanChoice === "Scissors") {
        if (robotChoice === "Rock") {
            alert("Robot wins!");
            scoringFunction("Robot");
        } else if (robotChoice === "Paper") {
            alert("Human wins!");
            scoringFunction("Human");
        } else if (robotChoice === "Scissors") {
            alert("It's a tie");
        } else {
            alert("Invalid choice for Robot");
        }
    }
};

const scoringFunction = (winner) => {
    let humanScore = document.querySelector("#human-score").innerHTML;
    let robotScore = document.querySelector("#robot-score").innerHTML;
    
    if (winner === "Human") {
        humanScore = parseInt(humanScore) + 1;
    } else if (winner === "Robot") {
        robotScore = parseInt(robotScore) + 1;
    }

    document.querySelector("#human-score").innerHTML = humanScore;
    document.querySelector("#robot-score").innerHTML = robotScore;
};

document.getElementById("clear-button").addEventListener("click", clearScores);

const clearScores = () => {
    document.querySelector("#human-score").innerHTML = "0";
    document.querySelector("#robot-score").innerHTML = "0";
};