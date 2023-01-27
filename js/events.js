let data = [
    {
        title: "Cricket",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/cricket.jpg",
        category: "teamevents"
    },
    {
        title: "Football",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/football.jpg",
        category: "teamevents"
    },

    {
        title: "Volleyball",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/volleyball.jpg",
        category: "teamevents"
    },


    {
        title: "Basketball",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/basketball.jpg",
        category: "teamevents"
    },


    {
        title: "100m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "200m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "400m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "800m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "1500m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "3000m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "100x4m",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "Relay",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/athletics.jpg",
        category: "athletics"
    },

    {
        title: "Javelin Throw",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/javelinThrow.jpg",
        category: "athletics"
    },

    {
        title: "Shotput",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/shotput.jpg",
        category: "athletics"
    },

    {
        title: "Longjump",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/longJump.jpg",
        category: "athletics"
    },


    {
        title: "Free Style",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/swimming.jpg",
        category: "aquatics"
    },

    {
        title: "Backstroke",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/swimming.jpg",
        category: "aquatics"
    },

    {
        title: "Butterfly",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/swimming.jpg",
        category: "aquatics"
    },

    {
        title: "Benchpress",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/powerlifting.jpg",
        category: "Powerlifting"
    },
    {
        title: "Deadlift",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/powerlifting.jpg",
        category: "Powerlifting"
    },
    {
        title: "Squats",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
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