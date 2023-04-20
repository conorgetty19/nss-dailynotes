/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
    {
        id: 1,
        text: "I am a note that says things",
        author: "Conor",
        date: "2/14/2023",
        topics: ["gibberish", "initial test"]
    },
    {
        id: 2,
        text: "Remmeber to buy groceries on Wednesday",
        author: "Conor",
        date: "2/14/2023",
        topics: ["groceries", "organization", "time management"]
    }
]

const notesFromTheFuture = [
    {
        id: 3,
        text: "You never should have let SkyNet access the internet!",
        author: "Sean Connor",
        date: "1/1/2029",
        topics: ["humanity", "SkyNet", "AI", "disaster", "cinema"]
    },
    {
        id: 4,
        text: "We defeated it. Humanity is safe. Change nothing",
        author: "Terminator",
        date: "1/2/2029",
        topics: ["humanity", "weak", "robots", "strong", "cinema"]
    }
]

for (note of notesFromTheFuture){
    notes.push(note)
}


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

//define new array with notes from the past
 const notesFromThePast = [
    {
        id: 5,
        text: "In the future, we will have hoverboards",
        author: "Robert Zemeckis and Bob Gale",
        date: "7/3/1985",
        topics: ["future", "tech", "technology", "cinema"]
    },
    {
        id: 6,
        text: "In the future, 3D movies will look like real life!",
        author: "Robert Zemeckis and Bob Gale",
        date: "11/22/1989",
        topics: ["future", "tech", "technology", "cinema"]
    }
 ]


/* Add notes from the  pastArray to the present/futureArray 
using the .push() method.
Include all the same properties:

id (number)
text (string)
author (string)
date (string)
topics (array of strings)
*/
for (note of notesFromThePast){
    notes.push(note)
}

/*display all notes in their entirety
for (note of notes){
    console.log(note.text)
}*/

/*display the topics from all notes
console.log("*** All Note Topics ***")
for (note of notes){
    for (topic of note.topics){
        console.log(topic)
    }
}*/

/*calculate and display average topics per note
console.log("*** Average Topics Per Note ***")

let totalTopics = 0

for (note of notes){
    totalTopics += note.topics.length
}

let averageTopics = totalTopics / notes.length

console.log(averageTopics)*/

/*only display notes w/specific criteria
const filteredNotes = []
const criteria = "cinema"

for (note of notes){
    if (note.topics.includes(criteria)){
        filteredNotes.push(note)
    }
}

console.log(filteredNotes)*/

//display all note text in html article elements
//and topics in section elements
console.log("***  Note Articles  ***")

for (note of notes){
    console.log(`<article>\n${note.text}`)
    for (topic of note.topics){
        console.log(`<section>${topic}</section>`)
    }
    console.log("</article>")
}