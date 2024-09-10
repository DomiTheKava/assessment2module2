const fordFocus = {
    image: "/images/focus.webp",
    name: "Ford Focus",
    type: "Car",
    year: "2015",
    description: "The Ford Focus is a compact car renowned for its practicality, comfort, and affordability. It features a stylish exterior, a well-appointed interior with advanced technology, and a responsive handling that makes it enjoyable to drive. With its efficient fuel economy and a reputation for reliability, the Ford Focus is a popular choice for those seeking a versatile and economical vehicle.",
};

const teslaModelS = {
    image: "/images/models.avif",
    name: "Tesla Model S",
    type: "Electric Car",
    year: "2020",
    description: "The Tesla Model S is a high-performance electric luxury sedan that pushes the boundaries of technology and design. It boasts an impressive range on a single charge, cutting-edge autopilot features, and a minimalist interior with a large touchscreen interface. Known for its swift acceleration and smooth ride, the Model S offers a futuristic driving experience while contributing to environmental sustainability.",
};

const truck = {
    image: "/images/truck.avif",
    name: "Truck",
    type: "Truck",
    year: "2018",
    description: "This versatile truck is built for both work and leisure, offering robust performance and substantial cargo capacity. It is designed to handle heavy loads with ease, whether you're towing trailers or carrying equipment. The truck features a durable build, a comfortable cabin with modern amenities, and advanced safety features. It’s an ideal choice for those who need a reliable vehicle for demanding tasks and off-road adventures.",
};

const teslaCybertruck = {
    image: "/images/cyber.avif",
    name: "Tesla Cybertruck",
    type: "Electric Truck",
    year: "2021",
    description: "The Tesla Cybertruck stands out with its unconventional design and high-performance electric powertrain. Its angular, stainless-steel exterior is not only visually striking but also highly durable and resistant to damage. With impressive off-road capabilities, a long electric range, and a spacious interior equipped with advanced technology, the Cybertruck represents the future of rugged, eco-friendly transportation.",
};

const corvetteC4 = {
    image: "/images/c4.jpeg",
    name: "Corvette C4",
    type: "Sports Car",
    year: "1995",
    description: "The Corvette C4 is an iconic American sports car that combines sleek, aerodynamic design with exhilarating performance. Known for its agile handling and powerful engine, the C4 offers a thrilling driving experience. The interior is designed for driver comfort and control, featuring supportive seats and a driver-focused layout. As a classic model, the C4 holds a special place in automotive history with its distinctive styling and engineering excellence.",
};



function displayData(container, data) {
    let html = `        <div class="carHolder">
            <img class='carImg' src="${data.image}" alt="${data.name}">
            <h2>${data.name}</h2>
            <h3>${data.type}</h3>
            <h3>${data.year}</h3>
            <p>${data.description}</p>
        </div>`

    document.getElementById(container).innerHTML = html
}