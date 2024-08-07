export default function handleResponseFromAPI(promise){
  promise
    .then("hello")
    .then(console.log("Got a response from the API"))
    .catch(new Error())
}
