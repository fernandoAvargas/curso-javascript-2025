const myCourses = [

    {
        description: "JavaScript",
        complet: "no",
        courseLocation: "Udemy",
        inCourse: "yes",       
    },
    {
        description: "Angular",
        complet: "no",
        courseLocation: "Udemy",
        inCourse: "yes",       
    },
    {
        description: "CSharp",
        complet: "yes",
        courseLocation: "Infnet",
        inCourse: "",       
    },
    {
        description: "HTML",
        complet: "yes",
        courseLocation: "Eurodata",
        inCourse: "",       
    },
];

for(let item of myCourses){

    if(item.courseLocation === "Infnet"){

        console.log("Cool!...I've studied there!...");      
    }

    console.log(item.description);
}

console.log("--------------------------------------------------------------");

for(let item of myCourses){

    if(item.courseLocation === "Infnet"){

        console.log("Cool!...I've studied there!...");
        break;
    }

    console.log(item.description);
}

console.log("--------------------------------------------------------------");

for(let item of myCourses){

    if(item.courseLocation === "Infnet"){

        console.log("Cool!...I've studied there!...");
        continue;
    }    

    console.log(item.description);
}

console.log("--------------------------------------------------------------");

for(let item of myCourses){

    if(item.description === "CSharp"){

        console.log(`Nice!...We have one opportunity in ${item.description} for you!...`);
        break;
    }    

    console.log(item.description);
}