/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    const url = 'https://api.breakingbadquotes.xyz/v1/quotes'

    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
    return data[0]
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = "Loading..."
    // const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( quote ) => {
        quoteLabel.innerHTML = quote.quote;
        authorLabel.innerHTML = quote.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async()=>{

        element.innerHTML = "Loading..."
        const quote = await fetchQuote();
        renderQuote(quote);


    })

    fetchQuote()
        .then(renderQuote);

}