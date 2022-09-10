
let btnAgregar = document.getElementById("Agregar");
let totalP = document.getElementById("totalcomp");
let totaldin = document.getElementById("totald")
let tabla = document.getElementById("tablaProd");
tabla.innerHTML = `<thead class="thead-dark">
<tr>
  <th scope="col">No.</th>
  <th scope="col">Producto</th>
  <th scope="col">Cantidad</th>
  <th scope="col">Precio Unitario</th>
</tr>
</thead>`

let cont =1;
let tot = 0;
let totd = 0;
let lista= [];
const key = "Shoplist";

btnAgregar.addEventListener("click", function(e){
    e.preventDefault();
/*     if (localStorage.getItem(key)) {
        let tmp2 = JSON.parse(localStorage.getItem(key));
        tmp2.forEach(el => {
            cont = el.id;
        });
    } */
    let nombre = document.getElementById("Name").value;
    let cantidad = document.getElementById("Number").value;
    let precio = parseFloat(10 * Math.random()).toFixed(2);
    p=[cont,nombre,cantidad,precio];
    tabla.innerHTML += `<tbody>
    <tr>
      <th scope="row">${p[0]}</th>
      <td>${p[1]}</td>
      <td>${p[2]}</td>
      <td>$ ${p[3]}</td>
    </tr>
</tbody>`


cont++;
let conteo = document.getElementById("num");
conteo.innerHTML = cont-1;
if (conteo.innerHTML!=0) {
    conteo.classList.remove("badge-secondary")
    conteo.classList.add("badge-success")
}
let tot1 = parseInt(p[2]);
tot += tot1;
totalP.innerHTML =` ${tot}`;

let tot2 = parseFloat((p[2]*p[3]).toFixed(2));
totd += tot2
totaldin.innerHTML =` $ ${totd}`;


let articulo = {"id": p[0], "Producto": p[1], "Cantidad": p[2], "PrecioUnitario":p[3]};
lista.push(articulo);
JSON.stringify(lista);

localStorage.setItem(key, JSON.stringify(lista))
})

if (localStorage.getItem(key)) {
    let tmp = JSON.parse(localStorage.getItem(key));
    tmp.forEach(element => {
        tabla.innerHTML += `<tbody>
        <tr>
          <th scope="row">${element.id}</th>
          <td>${element.Producto}</td>
          <td>${element.Cantidad}</td>
          <td>$ ${element.PrecioUnitario}</td>
        </tr>
    </tbody>`
    });
}

