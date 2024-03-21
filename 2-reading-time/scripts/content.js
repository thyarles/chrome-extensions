const article = document.querySelector("article")

// if not null
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    // matchALl returns an iterator, need to convert to array and count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // use same style of article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // support for API reference docs
    const heading = article.querySelector("h1");
    // support for article docs with date
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);
}