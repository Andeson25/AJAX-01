document.getElementById("loaded").innerHTML = new Date().toLocaleTimeString();

document
  .getElementById("get-client-data")
  .addEventListener("click", getClientData);

function getClientData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const clientData = JSON.parse(xhr.responseText);
      document.getElementById("client-name").innerHTML =
        clientData["client-name"];
      document.getElementById("client-age").innerHTML =
        clientData["client-age"];
    }
  };
  xhr.open("GET", "client-data.json", true);
  xhr.send();
}
