const table = document.querySelectorAll("#divSecaoFrequencia > fieldset > table > tbody > tr > td > img")

// Function to change image by text
function replaceImagesWithText() {
    const tableCells = document.querySelectorAll("table td");

    for (const cell of tableCells) {
        const image = cell.querySelector("img[src*='note_checked.gif']");

        if (image) {
            const content = image.getAttribute("onmouseover").match(/<b>(.*?)<\/b>/)[1];
            cell.removeChild(image);
            cell.textContent += content;
        }
    }
}


replaceImagesWithText();

// // if not null
// if (note) {
//     const text = note.textContent;
//     const wordMatchRegExp = /[^\s]+/g;
//     const words = text.matchAll(wordMatchRegExp);
//     // matchALl returns an iterator, need to convert to array and count
//     const wordCount = [...words].length;
//     const readingTime = Math.round(wordCount / 200);
//     const badge = document.createElement("p");
//     // use same style of article's header
//     badge.classList.add("color-secondary-text", "type--caption");
//     badge.textContent = `⏱️ ${readingTime} min read`;

//     // support for API reference docs
//     const heading = note.querySelector("h1");
//     // support for article docs with date
//     const date = note.querySelector("time")?.parentNode;

//     (date ?? heading).insertAdjacentElement("afterend", badge);
// }