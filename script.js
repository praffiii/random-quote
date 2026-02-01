const quoteContaine = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote-btn");

async function getRandomQuote() {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response is not okay");
    }

    const data = await response.json();

    return data.slip.advice;
  } catch (error) {
    console.error("Oops, connection lost or API is down:", error.message);
  }
}

newQuoteBtn.addEventListener("click", async () => {
  quote.innerHTML = "Taking quotes...";
  const quoteText = await getRandomQuote();
  quote.innerHTML = quoteText
    ? `"${quoteText}"`
    : "Failed to fetch quote. Please try again later!";
});
