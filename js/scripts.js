$(function() {

    var phrases = Array(
        "Bash",
        "Boomer",
        "Camo",
        "Chop Chop",
        "Cynder",
        "Dino-Rang",
        "Drill Sergeant",
        "Double Trouble",
        "Drobot",
        "Eruptor",
        "Ghost Roaster",
        "Gill Grunt",
        "Hex",
        "Ignitor",
        "Lightning Rod",
        "Prism Break",
        "Sonic Boom",
        "Slam Bam",
        "Spyro",
        "Stealth Elf",
        "Stump Smash",
        "Sunburn",
        "Terrafin",
        "Trigger Happy",
        "Voodood",
        "Warnado",
        "Wham-Shell",
        "Whirlwind",
        "Wrecking Ball",
        "Zap",
        "Zook",
        "Bash",
        "Chill",
        "Chop Chop",
        "Cynder",
        "Double Trouble",
        "Drill Sergeant",
        "Drobot",
        "Eruptor",
        "Flameslinger",
        "Flashwing",
        "Fright Rider",
        "Gill Grunt",
        "Hex",
        "Hot Dog",
        "Ignitor",
        "Jet-Vac",
        "Lightning Rod",
        "Pop Fizz",
        "Prism Break",
        "Shroomboom",
        "Slam Bam",
        "Sonic Boom",
        "Sprocket",
        "Spyro",
        "Stealth Elf",
        "Stump Smash",
        "Terrafin",
        "Trigger Happy",
        "Whirlwind",
        "Wrecking Ball",
        "Zap",
        "Zook",
        "Bouncer",
        "Crusher",
        "Eye Brawl",
        "Hot Head",
        "Ninjini",
        "Swarm",
        "Thumpback",
        "Tree Rex"
    );

    var phrase = phrases[Math.floor(Math.random() * phrases.length)].toUpperCase();

    var letters = phrase.split("");

    var wordHtml = "";

    $.each(letters, function(key, value){
        switch (value) {
            case " ":
                wordHtml += '<span>&nbsp;</span>&nbsp;';
                break;
            case "-":
                wordHtml += '<span>-</span>&nbsp;';
                break;
            default:
                wordHtml += '<span class="' + value + '">_</span>&nbsp;';
                break;
        }
    });

    $("#word").html(wordHtml);

    var errors = 0;

    $("#answer").click(function(){
        $("#letters a").addClass("ui-disabled");
        wordHtml = "";
        $.each(letters, function(key, value){
            wordHtml += '<span>' + value + '</span>&nbsp;';
        });
        $("#word").html(wordHtml);
    });

    $('#letters a[data-role="button"]').click(function(){
        $(this).addClass("ui-disabled");
        var letter = $(this).text();
        if ($.inArray(letter, letters) == -1) {
            errors++;
            $("#man img").attr("src", "img/" + errors + ".png");
            if (errors >= 6) {
                $("#letters a").addClass("ui-disabled");
                alert("YOU LOSE :(");
            }
        } else {
            $("#word span").each(function(){
                if ($(this).hasClass(letter)) {
                    $(this).text(letter);
                }
            });
            var underscores = 0;
            $("#word span").each(function(){
                if ($(this).text() == "_") {
                    underscores++;
                }
            });
            if (underscores == 0) {
                $("#letters a").addClass("ui-disabled");
                alert("YOU WIN!");
            }
        }
        return false;
    });

});
