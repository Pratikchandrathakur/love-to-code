const goodreadsInfo = {
    currentlyReading: [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien"
        },
        {
            title: "The Two Towers",
            author: "J.R.R. Tolkien"
        },
        {
            title: "The MOM Test",
            author: "Rob Fitzpatrick"
        }
    ],

    wantToRead: [
        {
            title: "The Art of Language Invention",
            author: "David Peterson"
        },
        {
            title: "Looking for Alaska",
            author: "John Green"
        }
    ]
};

const addNewBooks = (books, ...additionalBookObjects) => {
    return [...books, ...additionalBookObjects];
};

// Adding new books to currentlyReading
goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, 
    { title: "Educated", author: "Tara Westover" },
    { title: "Sapiens", author: "Yuval Noah Harari" }
);

const showGoodreadsInfo = (info) => {
    const currentlyReading = info.currentlyReading;
    const wantToRead = info.wantToRead;

    console.log("Currently Reading:");
    for (const book of currentlyReading) {
        console.log(`${book.title} by ${book.author}`);
    }

    console.log("\nWant to Read:");
    for (const book of wantToRead) {
        console.log(`${book.title} by ${book.author}`);
    }
};

// Show the reading lists
showGoodreadsInfo(goodreadsInfo);
