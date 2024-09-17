// Hardcoded month
let month = "April"; // Change this to test different months


// Variables to store zodiac sign and fortune
let sign = "";
let fortune = "";


// Determine zodiac sign and fortune
if (month === "January") {
    sign = "♑";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "You will find great success in your career.";
    } else {
        fortune = "An old friend will reach out to you.";
    }
} else if (month === "February") {
    sign = "♒";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Expect a pleasant surprise in your personal life.";
    } else {
        fortune = "Your creativity will shine brightly.";
    }
} else if (month === "March") {
    sign = "♓";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "A new opportunity will present itself.";
    } else {
        fortune = "You will have a chance to reconnect with family.";
    }
} else if (month === "April") {
    sign = "♈";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Be bold and take initiative in a new project.";
    } else {
        fortune = "A challenge will lead to personal growth.";
    }
} else if (month === "May") {
    sign = "♉";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Enjoy a period of stability and contentment.";
    } else {
        fortune = "Focus on your financial goals.";
    }
} else if (month === "June") {
    sign = "♊";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Communication will be key to resolving a conflict.";
    } else {
        fortune = "A short trip may bring joy.";
    }
} else if (month === "July") {
    sign = "♋";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Spend quality time with loved ones.";
    } else {
        fortune = "Your intuition will guide you to make a wise decision.";
    }
} else if (month === "August") {
    sign = "♌";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Your confidence will lead you to success.";
    } else {
        fortune = "A romantic gesture will brighten your day.";
    }
} else if (month === "September") {
    sign = "♍";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Pay attention to the details of a new plan.";
    } else {
        fortune = "You will find clarity in a confusing situation.";
    }
} else if (month === "October") {
    sign = "♎";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Balance and harmony will be important in your relationships.";
    } else {
        fortune = "An unexpected gift will make you smile.";
    }
} else if (month === "November") {
    sign = "♏";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "A transformation is on the horizon.";
    } else {
        fortune = "Trust your instincts in a critical situation.";
    }
} else if (month === "December") {
    sign = "♐";
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        fortune = "Adventure and exploration will bring joy.";
    } else {
        fortune = "A new learning experience is coming your way.";
    }
} else {
    sign = "";
    fortune = "Invalid month. Please check for typing mistakes.";
}


// Print the result
if (sign) {
    console.log(Your sign is ${sign} and your fortune is ${fortune});
} else {
    console.log(fortune);
}
