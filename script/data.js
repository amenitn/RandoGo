var defaultThreads = [
    {
        id: 1,
        title: "bonjour ou etes vous ? ",
        author: "Malek",
        date: Date.now(),
        content: "Bonjour, qui est au bon lieu sud ,on organise une randonnée ensemble ? ",
        comments: [
            {
                author: "Ahmed",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Abir",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Y a t-il un programme pour le mois janvier ?",
        author: "Aaron",
        date: Date.now(),
        content: "Y a t-il un programme pour le mois janvier ? ",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "yess"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "maybe"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}