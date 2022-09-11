
// Nombrar variables //
let btnAgregar = document.getElementById("Agregar");
let totalP = document.getElementById("totalcomp");
let totaldin = document.getElementById("totald")
let tabla = document.getElementById("tablaProd");
let conteo = document.getElementById("num");
// Colocar encabezado de tabla //
tabla.innerHTML = `<thead class="thead-dark">
<tr>
  <th scope="col">No.</th>
  <th scope="col">Producto</th>
  <th scope="col">Cantidad</th>
  <th scope="col">Precio Unitario</th>
</tr>
</thead>`

// Variables de entrada //

let cont = 0;
let tot = 0;
let totd = 0;
let lista= [];
const key = "Shoplist";

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
  cont = element.id;
  let tot1 = parseInt(element.Cantidad);
  tot += tot1;
  totalP.innerHTML =` ${tot}`;

  let tot2 = parseFloat(parseFloat((element.Cantidad*element.PrecioUnitario)).toFixed(2));
  totd += tot2;
  totaldin.innerHTML =` $ ${totd.toFixed(2)}`;

  lista.push(tmp);
  });
}

// Validación de campos //

let N = document.getElementById("Name");
let C = document.getElementById("Number")

N.addEventListener("blur", function(e){
  e.preventDefault();
  if (isNaN(N.value) && N.value.length >=3) {
    N.classList.add("is-valid");
  } else {
    N.classList.add("is-invalid");
    N.value = ""
  }
})

C.addEventListener("blur", function(e){
  e.preventDefault();
  if (!isNaN(N.value)) {
    C.classList.add("is-invalid");
    C.value = ""
  } else {
    C.classList.add("is-valid");
  }
})


// Llamada a la acción del botón Agregar // 

btnAgregar.addEventListener("click", function(e){
    e.preventDefault();
    // Llamar los valores en los input //
    let nombre = document.getElementById("Name").value;
    let cantidad = document.getElementById("Number").value;
    let precio = parseFloat(10 * Math.random()).toFixed(2);
    cont++;
    p=[cont,nombre,cantidad,precio];
    // llenar tabla con valores del arreglo // 

    tabla.innerHTML += `<tbody>
    <tr>
      <th scope="row">${p[0]}</th>
      <td>${p[1]}</td>
      <td>${p[2]}</td>
      <td>$ ${p[3]}</td>
    </tr>
</tbody>`;
// Contador //
conteo.innerHTML = cont;
if (conteo.innerHTML!=0) {
  conteo.classList.remove("badge-secondary");
  conteo.classList.add("badge-success");
}
// Suma de valores en el resumen //
let tot1 = parseInt(p[2]);
tot += tot1;
totalP.innerHTML =` ${tot}`;

let tot2 = parseFloat(parseFloat((p[2]*p[3])).toFixed(2));
totd += tot2
totaldin.innerHTML =` $ ${totd.toFixed(2)}`;

// Guardar en local Storage //

let articulo = {"id": p[0], "Producto": p[1], "Cantidad": p[2], "PrecioUnitario":p[3]};
lista.push(articulo);
JSON.stringify(lista);

localStorage.setItem(key, JSON.stringify(lista));

}) // addEventListener

// contador independiente del botón //
conteo.innerHTML = cont;
if (conteo.innerHTML!=0) {
    conteo.classList.remove("badge-secondary");
    conteo.classList.add("badge-success");
}