export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received successfully");  // Resolve the promise with the result
      } else {
        reject("Error: Failed to get response from API");  // Reject the promise with an error
      }
    }, 1000);  // Simulating a delay of 1 second
  });
}
