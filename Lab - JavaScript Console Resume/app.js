var Name = "Raghav Chugh";
var interests = ["Badminton", "CS", "Documentaries", "Food"];
var pastPositions = [
    {
        jobTitle: "ET Campus Stars 2.0 Organizer",
        coName: "The Economic Times",
        description: "Organized the complete event."
    },
    {
        jobTitle: "Data Analyst Intern",
        coName: "XYZ Technologies",
        description: "Help the company make crucial decisions for launching Global products."
    },
    {
        jobTitle: "Summer Machine Learning Trainee",
        coName: "IIT Kanpur",
        description: "Trained for modern-day data science techniques."
    }
]

var skills = [
    {
        skillName : "Data Science",
        isCool : true
    },
    {
        skillName : "Deep Learning",
        isCool : false
    },
    {
        skillName : "Business Intelligence",
        isCool : true
    }
]

function displayPosition(coName, jobTitle, description) {
    console.log(jobTitle + " at " + coName + " - " + description + "\n");
}

function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log("BAM : "+skillName);
    }
    else{
    console.log(skillName);
    }
}

console.log("Name: " + Name.toUpperCase());
console.log("Career: Business Analyst");
console.log("Description: Analyzing problems to make business decisions.");

var i;

console.log("My Interests: \n");

for(i=0;i<interests.length;i++){
    console.log(interests[i]);
}

console.log("My Previous Experience \n");

for(i=0;i<pastPositions.length;i++){
    console.log(displayPosition(pastPositions[i].coName,pastPositions[i].jobTitle,pastPositions[i].description));
}

console.log("My Skills: \n");

for(i=0;i<skills.length;i++){
    console.log(displaySkill(skills[i].skillName,skills[i].isCool));
}