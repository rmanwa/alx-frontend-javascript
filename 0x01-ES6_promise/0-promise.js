export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received successfully");
      } else {
        reject("Error: Failed to get response from API");
      }
    }, 1000);
  });
}
