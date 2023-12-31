
$("input").on("change", function () {
    var selected = this.id;
    var paragraph;

    switch (selected) {
        case "t1":
            paragraph = 'Thank you for your feedback! We appreciate that you find our website good.';
            break;
        case "t2":
            paragraph = 'Awesome! We are glad to hear that you think our website is better.';
            break;
        case "t3":
            paragraph = 'We appreciate your honesty. We will work on improving our website.';
            break;
        case "t4":
            paragraph = 'Wow! Your feedback made our day. Thank you for considering our website the best!';
            break;
        default:
            paragraph = 'Please select a feedback option.';
    }

    alert(paragraph);
});
