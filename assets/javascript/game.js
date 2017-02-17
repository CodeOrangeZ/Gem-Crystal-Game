// updated to meet requirements of object
var game = {
	userScore: 0,
	winsCount: 0,
	losesCount: 0,
	rubyValue: null,
	emeraldValue: null,
	sapphireValue: null,
	diamondValue: null,
	crystals: ["ruby", "emerald", "sapphire", "diamond"],
	possibleGemValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	currentAns: null,

// generates gem value
	genGemValue: function() {
		return this.possibleGemValue[Math.floor(Math.random() * this.possibleGemValue.length)];
	},

	getRandomInt: function() {
    		return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	},
// creates game 
	newGame: function() {
		this.currentAns = this.getRandomInt();
		console.log("Current answer: " + this.currentAns);

		$("#currentScore").html(this.currentAns);

		this.rubyValue = this.genGemValue();
		this.emeraldValue = this.genGemValue();
		this.sapphireValue = this.genGemValue();
		this.diamondValue = this.genGemValue();
		console.log("Ruby value: " + this.rubyValue);
		console.log("Emerald value: " + this.emeraldValue);
		console.log("Sapphire value: " + this.sapphireValue);
		console.log("Diamond value: " + this.diamondValue);

		$("#currentUserScore").html(0);
		this.userScore = 0;
	},

	loseGame: function() {
		$("#annouceDisplay").html("You lost!");

// resets to a new game
		this.newGame();
	}
}


// on click functions that add crystal values =========================


$("#ruby").on("click", function() {
	// add crystal value to user score
	game.userScore += game.rubyValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

$("#emerald").on("click", function() {
	// add crystal value to user score
	game.userScore += game.emeraldValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

$("#sapphire").on("click", function() {
	// add crystal value to user score
	game.userScore += game.sapphireValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

$("#diamond").on("click", function() {
	// add crystal value to user score
	game.userScore += game.diamondValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

// calling new game function

game.newGame();