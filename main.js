const button = document.getElementById(“myButton”);// Add an event listener for the “click” event on the button
button.addEventListener(“click”, () => {
  // Make a fetch request when the button is clicked
  const record = fetch(“https://programming-quotes-api.azurewebsites.net/api/quotes”)
    .then((response) => {
      // Handle the response from the API
      if (!response.ok) {
        throw new Error(“Network response was not ok”);
      }
      return response.json(); // Assuming the response is JSON
    })
    .then((data) => {
      // Process the fetched data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error(“Error fetching data:“, error);
    });
	alert(record);
});







