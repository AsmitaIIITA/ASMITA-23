let data = [
    {
        title: "Cricket",
        description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end. ",
        img: "/assets/images/cricket.jpg",
        category: "teamevents"
    },
    {
        title: "Football",
        description: "Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms.",
        img: "/assets/images/football.jpg",
        category: "teamevents"
    },

    {
        title: "Volleyball",
        description: "volleyball, Game played by two teams of six players each, in which an inflated ball is volleyed over a high net.",
        img: "/assets/images/volleyball.jpg",
        category: "teamevents"
    },


    {
        title: "Basketball",
        description: "It is a team sport that involves two teams of five active players each trying to score points against one another by throwing a ball through a 300 cm (10 feet) high hoop (the 'basket') under organised rules.",
        img: "/assets/images/basketball.jpg",
        category: "teamevents"
    },


    {
        title: "100m",
        description: "The 100 metres, or 100-meter dash, is a sprint race in track and field competitions. The shortest common outdoor running distance,",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    // {
    //     title: "200m",
    //     description: "The 200 metres, or 200-meter dash, is a sprint running event.",
    //     img: "/assets/images/athletics.jpg",
    //     category: "athletics"
    // },

    // {
    //     title: "400m",
    //     description: "The 400m race is exactly one lap of a standard outdoor running track. Starting in staggered positions, the athletes run the entire race in a designated lane.",
    //     img: "/assets/images/athletics.jpg",
    //     category: "athletics"
    // },

    // {
    //     title: "800m",
    //     description: "The 800 metres, or meters, is a common track running event. It is the shortest commonly run middle-distance running event.",
    //     img: "/assets/images/athletics.jpg",
    //     category: "athletics"
    // },

    // {
    //     title: "1500m",
    //     description: "the 1500m is the marquee middle-distance event. Demanding a balance of aerobic and anaerobic conditioning, athletes complete three-and-three-quarter laps of a standard 400m track.",
    //     img: "/assets/images/athletics.jpg",
    //     category: "athletics"
    // },

    // {
    //     title: "3000m",
    //     description: "The 3000 metres or 3000-metre run is a track running event, also commonly known as the 3K or 3K run",
    //     img: "/assets/images/athletics.jpg",
    //     category: "athletics"
    // },

    {
        title: "100x4m",
        description: "The 4 × 100 metres relay is an athletics track event run in lanes over one lap of the track with four runners completing 100 metres each.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "Relay",
        description: "The 4 × 100 metres relay or sprint relay is an athletics track event run in lanes over one lap of the track with four runners completing 100 metres each.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "Javelin Throw",
        description: "A throwing event in which athletes throw a metal-tipped javelin as far as possible. It requires a combination of strength, power, timing, co-ordination precision and timing.",
        img: "/assets/images/javelinThrow.jpg",
        category: "athletics"
    },

    {
        title: "Shotput",
        description: "The shot put is a track and field event involving putting (throwing) a heavy spherical ball—the shot—as far as possible.",
        img: "/assets/images/shotput.jpg",
        category: "athletics"
    },

    {
        title: "Longjump",
        description: "long jump, also called broad jump, sport in athletics (track-and-field) consisting of a horizontal jump for distance.",
        img: "/assets/images/longJump.jpg",
        category: "athletics"
    },


    {
        title: "Free Style",
        description: "Freestyle means that in an event so designated the swimmer may swim any style, except that in individual medley.",
        img: "/assets/images/swimming.jpg",
        category: "aquatics"
    },

    {
        title: "Backstroke",
        description: "a swimming stroke executed on the back and usually consisting of alternating circular arm pulls and a flutter kick.",
        img: "/assets/images/swimming.jpg",
        category: "aquatics"
    },

    {
        title: "Butterfly",
        description: "a swimming stroke performed face down, in which both arms are thrust out at the sides at the same time.",
        img: "/assets/images/swimming.jpg",
        category: "aquatics"
    },

    {
        title: "Benchpress",
        description: "The bench press is a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward.",
        img: "/assets/images/powerlifting.jpg",
        category: "Powerlifting"
    },
    {
        title: "Deadlift",
        description: "The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor.",
        img: "/assets/images/powerlifting.jpg",
        category: "Powerlifting"
    },
    {
        title: "Squats",
        description: "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
        img: "/assets/images/powerlifting.jpg",
        category: "Powerlifting"
    },
]

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
            </div>`
    })
    document.getElementById("sports-container").innerHTML = content;
}

function onTabSelect(event) {
    if (event.value === 'all') {
        return setSection(data);
    }
    let filteredData = [ ...data ];
    filteredData = filteredData.filter((c) => {
        return c.category === event.value;
    })
    console.log(filteredData);
    return setSection(filteredData);
}

setSection(data);