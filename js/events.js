let data = [
    {
        title: "Cricket",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/bg1.webp",
        category: "cricket"
    },
    {
        title: "Badminton (M)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/bg1.webp",
        category: "badminton"
    },
    {
        title: "Badminton (W)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        img: "/assets/images/bg1.webp",
        category: "badminton"
    }
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