
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    console.log(data);
    data.forEach(function (element) {
      // document.getElementById('data').innerHTML += '<td>NIM :' + element.id + '</td><td>Nama :' + element.name + '</td><td>Alamat :' + element.username + '</td><td>' + '</td><td>Alamat :' + element.address.street + '</td>';
      document.getElementById('data').innerHTML += `<td> ${element.id} </td>
      <td> ${element.name} </td>
      <td> ${element.username} </td>
      <td> ${element.email} </td>
      <td> ${element.address.street}, ${element.address.suite}, ${element.address.city} </td>
      <td> ${element.company.name} </td>`;
    });
  }
};
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhttp.send();
