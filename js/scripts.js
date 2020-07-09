$(function() {

  var phrases = Array(
    "Air Strike",
    "Ambush",
    "Astroblast",
    "Aurora",
    "Bad Juju",
    "Barbella",
    "Barkley",
    "Bash",
    "Bat Spin",
    "Blackout",
    "Blades",
    "Blast Zone",
    "Blaster-Tron",
    "Blastermind",
    "Blizzard Chill",
    "Blue Bash",
    "Boom Bloom",
    "Boom Jet",
    "Boomer",
    "Bop",
    "Bouncer",
    "Breeze",
    "Buckshot",
    "Bumble Blast",
    "Bushwhack",
    "Camo",
    "Chain Reaction",
    "Chill",
    "Chompy Mage",
    "Chop Chop",
    "Chopper",
    "Chopscotch",
    "Cobra Cadabra",
    "Countdown",
    "Crash Bandicoot",
    "Crusher",
    "Cynder",
    "Dec-Ember",
    "Deja Vu",
    "Dino-Rang",
    "Dive-Clops",
    "Donkey Kong",
    "Doom Stone",
    "Double Trouble",
    "Dr. Krankcase",
    "Dr. Neo Cortex",
    "Drill Sergeant",
    "Drobit",
    "Drobot",
    "Dune Bug",
    "Echo",
    "Ember",
    "Enigma",
    "Eruptor",
    "Eye Small",
    "Eye-Brawl",
    "Fiesta",
    "Fire Kraken",
    "Fist Bump",
    "Flameslinger",
    "Flarewolf",
    "Flashwing",
    "Fling Kong",
    "Flip Wreck",
    "Food Fight",
    "Free Ranger",
    "Freeze Blade",
    "Fright Rider",
    "Fryno",
    "Funny Bone",
    "Gearshift",
    "Ghost Roaster",
    "Gill Grunt",
    "Grave Clobber",
    "Grilla Drilla",
    "Grim Creeper",
    "Gusto",
    "Hammer Slam Bowser",
    "Head Rush",
    "Hex",
    "High Five",
    "High Volt",
    "Hijinx",
    "Hood Sickle",
    "Hoot Loop",
    "Hot Dog",
    "Hot Head",
    "Ignitor",
    "Jawbreaker",
    "Jet-Vac",
    "Ka-Boom",
    "Kaos",
    "Kickoff Countdown",
    "King Pen",
    "Knight Light",
    "Knight Mare",
    "Krypt King",
    "Lightning Rod",
    "Lob-Star",
    "Magna Charge",
    "Mini Jini",
    "Mysticat",
    "Night Shift",
    "Nightfall",
    "Ninjini",
    "Pain-Yatta",
    "Pet Vac",
    "Pink Barbella",
    "Pit Boss",
    "Pop Fizz",
    "Pop Thorn",
    "Prism Break",
    "Punk Shock",
    "Queen",
    "Rattle Shake",
    "Rip Tide",
    "Ro-Bow",
    "Rocky Roll",
    "Roller Brawl",
    "Rubble Rouser",
    "Scorp",
    "Scratch",
    "Short Cut",
    "Shroomboom",
    "Slam Bam",
    "Slobber Tooth",
    "Small Fry",
    "Smash Hit",
    "Smolderdash",
    "Snap Shot",
    "Snowderdash",
    "Sonic Boom",
    "Spitfire",
    "Splat",
    "Spotlight",
    "Sprocket",
    "Spry",
    "Spy Rise",
    "Spyro",
    "Star Strike",
    "Starcast",
    "Stealth Elf",
    "Stink Bomb",
    "Stormblade",
    "Stump Smash",
    "Sunburn",
    "Swarm",
    "Tae Kwon Crow",
    "Terrabite",
    "Terrafin",
    "Thrillipede",
    "Thumpback",
    "Thumpling",
    "Thunderbolt",
    "Tidepool",
    "Torch",
    "Trail Blazer",
    "Trap Shadow",
    "Tread Head",
    "Tree Rex",
    "Tri-Tip",
    "Trigger Happy",
    "Tuff Luck",
    "Voodood",
    "Wallop",
    "Warnado",
    "Wash Buckler",
    "Weeruptor",
    "Wham-Shell",
    "Whirlwind",
    "Whisper Elf",
    "Wild Storm",
    "Wildfire",
    "Wind Up",
    "Wolfgang",
    "Wrecking Ball",
    "Zap",
    "Zoo Lou",
    "Zook"
  );

  var phrase = phrases[Math.floor(Math.random() * phrases.length)].toUpperCase();

  var letters = phrase.split("");

  var wordHtml = "";

  $.each(letters, function(key, value) {
    switch (value) {
      case " ":
        wordHtml += '<span>&nbsp;</span>&nbsp;';
        break;
      case "-":
        wordHtml += '<span>-</span>&nbsp;';
        break;
      case ".":
        wordHtml += '<span>.</span>&nbsp;';
        break;
      default:
        wordHtml += '<span class="' + value + '">_</span>&nbsp;';
        break;
    }
  });

  $("#word").html(wordHtml);

  var errors = 0;

  $("#answer").click(function() {
    $("#letters a").addClass("ui-disabled");
    wordHtml = "";
    $.each(letters, function(key, value) {
      wordHtml += '<span>' + value + '</span>&nbsp;';
    });
    $("#word").html(wordHtml);
  });

  $('#letters a[data-role="button"]').click(function() {
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
      $("#word span").each(function() {
        if ($(this).hasClass(letter)) {
          $(this).text(letter);
        }
      });
      var underscores = 0;
      $("#word span").each(function() {
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
