var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  //jakiś kod z axiosem
  renderHTML();
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        console.log(response.data.message);
    })
    .catch(function(error) {
        console.log(response);

    });
});
 