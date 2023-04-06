const data = {
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images :  {
        url: "https://dummy.com/red-image.jpg",
    }
};

function result(data) {
    for(const prop in data) {
        const value = data[prop] ;
        if (typeof value === "string" && value.toLowerCase().includes("red")) {
            data[prop] = value.replace(/red/gi, 'blue')
        }
        else if (typeof value === "obejct" && value!== null) {
            result(value)
        }
    }
}

result(data) ;
console.log(data)
