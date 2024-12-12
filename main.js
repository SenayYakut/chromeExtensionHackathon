/*const button = document.getElementById("myButton"); // Add an event listener for the “click” event on the button

button.addEventListener("click", () => {
  fetch("https://programming-quotes-api.azurewebsites.net/api/quotes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Display the quote in an alert
      alert(data[0].en); // Access the first quote and its 'en' property
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Error fetching the quote. Please try again later.");
    });
});
er.*/

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const quoteDisplay = document.getElementById("quoteDisplay");

  button.addEventListener("click", () => {
    console.log("Button clicked! Fetching data...");
    button.textContent = "Loading...";
    button.disabled = true;

    fetch("https://zenquotes.io/api/random")
      .then((response) => {
        console.log("Fetch response received:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Quote data:", data);
        quoteDisplay.textContent = `"${data.content}" - ${data.author}`;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        quoteDisplay.textContent =
          "Error fetching the quote. Please try again later.";
      })
      .finally(() => {
        button.textContent = "Get Quote";
        button.disabled = false;
      });
  });
});
