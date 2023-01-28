let data = [
    {
        title: "Cricket",
        description:
            "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end. ",
        img: "../assets/images/cricket.jpg",
        category: "teamevents",
    },
    {
        title: "Football",
        description:
            "Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms.",
        img: "../assets/images/football.jpg",
        category: "teamevents",
    },

    {
        title: "Volleyball",
        description:
            "volleyball, Game played by two teams of six players each, in which an inflated ball is volleyed over a high net.",
        img: "../assets/images/volleyball.jpg",
        category: "teamevents",
    },

    {
        title: "Basketball",
        description:
            "It is a team sport that involves two teams of five active players each trying to score points against one another by throwing a ball through a 300 cm (10 feet) high hoop (the 'basket') under organised rules.",
        img: "../assets/images/basketball.jpg",
        category: "teamevents",
    },
    {
        title: "Squash",
        description:
            "Squash is a racket-and-ball sport played by two or four players in a four-walled court with a small, hollow, rubber ball.",
        img: "../assets/images/squash.jpg",
        category: "teamevents",
    },
    {
        title: "Table Tennis",
        description:
            "Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small solid rackets. It takes place on a hard table divided by a net.",
        img: "../assets/images/tableTennis.jpg",
        category: "teamevents",
    },
    {
        title: "Kabbadi",
        description:
            "Kabaddi is a contact team sport. Played between two teams of seven players, the objective of the game is for a single player on offence, referred to as a raider, to run into the opposing team's half of the court, touch out as many of their players and return to their own half of the court, all without being tackled by the defenders in 30 seconds",
        img: "../assets/images/kabbadi.jpg",
        category: "teamevents",
    },
    {
        title: "Kho-Kho",
        description:
            "Like tag, the objective of Kho Kho is to tag or hunt down an opponent and score points. However, it is bound by a strict set of rules rather than being a free-for-all playground game.            ",
        img: "../assets/images/kho-kho.png",
        category: "teamevents",
    },
    {
        title: "Carrom",
        description:
            "Carrom is a tabletop game of Indian origin in which players flick discs, attempting to knock them to the corners of the board. ",
        img: "../assets/images/carrom.jpg",
        category: "Solo",
    },
    {
        title: "Chess",
        description:
            "Chess is an abstract strategy game and involves no hidden information. It is played on a chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns.",
        img: "../assets/images/chess.jpg",
        category: "Solo",
    },
    {
        title: "Athletics",
        description:
            "Athletics include 100m, 200m, 400m, 800m, 1500m, 3000m medal races.",
        img: "../assets/images/athletics.jpg",
        category: "athletics",
    },
    {
        title: "Relay",
        description:
            "The 4 × 100 metres relay or sprint relay is an athletics track event run in lanes over one lap of the track with four runners completing 100 metres each.",
        img: "../assets/images/athletics.jpg",
        category: "athletics",
    },

    {
        title: "Javelin Throw",
        description:
            "A throwing event in which athletes throw a metal-tipped javelin as far as possible. It requires a combination of strength, power, timing, co-ordination precision and timing.",
        img: "../assets/images/javelinThrow.jpg",
        category: "athletics",
    },

    {
        title: "Shotput",
        description:
            "The shot put is a track and field event involving putting (throwing) a heavy spherical ball—the shot—as far as possible.",
        img: "../assets/images/shotput.jpg",
        category: "athletics",
    },
    {
        title: "Discuss Throw",
        description:
            "The discus throw, also known as disc throw, is a track and field event in which an athlete throws a heavy disc—called a discus—in an attempt to mark a farther distance than their competitors.",
        img: "../assets/images/discussThrow.jpg",
        category: "athletics",
    },

    {
        title: "Long Jump",
        description:
            "long jump, also called broad jump, sport in athletics (track-and-field) consisting of a horizontal jump for distance.",
        img: "../assets/images/longJump.jpg",
        category: "athletics",
    },

    {
        title: "Free Style",
        description:
            "Freestyle means that in an event so designated the swimmer may swim any style, except that in individual medley.",
        img: "../assets/images/swimming.jpg",
        category: "aquatics",
    },

    {
        title: "Backstroke",
        description:
            "a swimming stroke executed on the back and usually consisting of alternating circular arm pulls and a flutter kick.",
        img: "../assets/images/swimming.jpg",
        category: "aquatics",
    },

    {
        title: "Butterfly",
        description:
            "a swimming stroke performed face down, in which both arms are thrust out at the sides at the same time.",
        img: "../assets/images/swimming.jpg",
        category: "aquatics",
    },

    {
        title: "Benchpress",
        description:
            "The bench press is a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward.",
        img: "../assets/images/powerlifting.jpg",
        category: "Powerlifting",
    },
    {
        title: "Deadlift",
        description:
            "The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor.",
        img: "../assets/images/powerlifting.jpg",
        category: "Powerlifting",
    },
    {
        title: "Squats",
        description:
            "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
        img: "../assets/images/powerlifting.jpg",
        category: "Powerlifting",
    },
];

function setSection(data) {
    console.log("Setting the cards inside section");
    let content = "";
    data.map((c) => {
        content += `<div class="sports-card-container" style="background-image: url(${c.img});">
                <div class="sports-card">
                    <h4 class="sports-card-title">
                        ${c.title}
                    </h4>
                    <p class="sports-card-description">
                        ${c.description}
                    </p>
                </div>
                <div class="sports-card-anim-block-1"></div>
                <div class="sports-card-anim-block-2"></div>
            </div>`;
    });
    document.getElementById("sports-container").innerHTML = content;
}

function onTabSelect(event) {
    if (event.value === "all") {
        return setSection(data);
    }
    let filteredData = [...data];
    filteredData = filteredData.filter((c) => {
        return c.category === event.value;
    });
    console.log(filteredData);
    return setSection(filteredData);
}

setSection(data);
