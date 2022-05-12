export default class Table {
  constructor(init) {
    this.init = init;
  }
  createHead(data) {
    let buka = "<thead><tr>";
    let tutup = "</tr></thead>";
    data.forEach((isi) => {
      buka += `<th>${isi}</th>`;
    });
    return buka + tutup;
  }
  creatTd(data) {
    let buka = "<tbody>";
    let tutup = "</tbody>";
    data.forEach((isi) => {
      buka += `<tr> 
        <td>${isi[0]}</td>
        <td>${isi[1]}</td>
        <td>${isi[2]}</td>
        </tr>`;
    });
    return buka + tutup;
  }
  render(element) {
    let table =
      "<table class='table table-hover table-striped table-bordered border-primary'>" +
      this.createHead(this.init.columns) +
      this.creatTd(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}
