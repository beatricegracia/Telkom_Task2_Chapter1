const data = {
    marketing: [
        {
            name: "Budi",
            salary: 5000000,
        },
        {
            name: "Agus",
            salary: 4500000,
        },
    ],
    engineer: {
        frontend: [
            {
                name: "Suci",
                salary: 8500000,
            },
            {
                name: "Lukito",
                salary: 7000000,
            },
        ],
        backend: [
            {
                name: "Bustomi",
                salary: 9500000,
            },
        ],
        devops: [
            {
                name: "Paul",
                salary: 9000000,
            },
        ],
    },
};

function result(data) {
    let sum = 0;
    if(Array.isArray(data)) {
        for(let i=0; i<data.length; i++) {
            sum += data[i].salary ;
        }
    }
    else if(typeof(data)==="object" && data!==null) {
        for(let prop in data) {
            sum += result(data[prop]) ;
        }
    }
    return sum ;
}

const total = result(data) ;
console.log(total)



