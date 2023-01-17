var n=2,m=2
function mostrarGJ(){
    var muestra=document.getElementsByName("matrices");
    var esconde=document.getElementsByName("cambiobase");
    for(var i=0;i<esconde.length;i++){
        esconde[i].setAttribute("hidden",true);
    }
    for(var i=0;i<muestra.length;i++){
        muestra[i].removeAttribute("hidden");
    }
}
// Función para encontrar la matriz identidad
function determinanteGauss (matriz) {
    var resultadoM=document.getElementById("determinanteR")
    // creamos una copia de la matriz
    var A = matriz.slice();
    console.log(A);
    if(n!=m){
        resultadoM.innerHTML='0';
        return;
    }
    // inicializamos el resultado
    var resultado = 1;
    
    // aplicamos la eliminación gaussiana
    for (var i = 0; i < n; i++) {
      // buscamos el elemento pivot
      var pivot = A[i][i];
      
      // verificamos que el elemento pivot no sea cero
      if (pivot == 0) {
        // buscamos una fila que no tenga un cero como elemento pivot
        for (var j = i + 1; j < n; j++) {
          // verificamos si el elemento pivot es diferente de cero
          if (A[j][i] != 0) {
            // intercambiamos filas
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            // intercambiamos el operador
            // cambiamos el signo del resultado
            resultado *= -1;
            // actualizamos el pivot
            pivot = A[i][i];
            break;
          }
        }
        // verificamos que el elemento pivot no sea cero
        if (pivot == 0) {
            resultadoM.innerHTML="0";
        }
      }
      
      // normalizamos la fila
      for (var j = 0; j < n; j++) {
        A[i][j] /= pivot;
      }
      // multiplicamos el resultado por el pivot
      resultado *= pivot;
      
      // hacemos cero los elementos de la columna
      for (var j = 0; j < n; j++) {
        if (j != i) {
          var factor = A[j][i];
          for (var k = 0; k < n; k++) {
            A[j][k] -= A[i][k] * factor;
          }
        }
      }
    }
    // devolvemos el resultado
    ;
    resultadoM.innerHTML=new Fraction(resultado).toLatex();
  }
function gaussJ(matriz) {
    var ban=0;
    var cont=0;
    var resultado=document.getElementsByName("res");
    var inversa=document.getElementsByName("inv");
    // Creamos la matriz identidad
    let identidad = new Array(n);
    for (let i = 0; i < n; i++) {
      identidad[i] = new Array(m);
      for (let j = 0; j < m; j++) {
        if (i == j) {
          identidad[i][j] = 1;
        }
        else {
          identidad[i][j] = 0;
        }
      }
    }
    // Aplicamos el método de Gauss-Jordan
    for (let k = 0; k < n; k++) {
      ban=0;
      let pivot = matriz[k][k];
      // Dividimos la fila k de la matriz original
      if (pivot==0){
        for(let q = k+1; q < n; q++) {
            if(matriz[q][k]>0 && ban==0){
                for (let r = 0; r < m; r++) {
                    matriz[k][r] = matriz[k][r] + matriz[q][r];
                    identidad[k][r] = identidad[k][r] + identidad[q][r];
                }
                ban=1;
            }
        }
        if(ban==0){
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    resultado[cont].innerHTML = new Fraction(matriz[i][j]).toLatex();
                    //inversa[cont].innerHTML= identidad[i][j];
                    cont++;
                }
            }
            var inversat=document.getElementById("invt");
            var inversaa=document.getElementById("inver");
            inversaa.setAttribute("hidden",true);
            inversat.innerHTML="No hay inversa";
            return;
        }
        k=-1;
        continue;
      }
      for (let l = 0; l < m; l++) {
        matriz[k][l] = matriz[k][l] / pivot;
        identidad[k][l] = identidad[k][l] / pivot;
      }
      // Modificamos las demás filas
      for (let p = 0; p < n; p++) {
        if (p != k) {
          let coeficiente = matriz[p][k];
          for (let l = 0; l < m; l++) {
            matriz[p][l] = matriz[p][l] - coeficiente * matriz[k][l];
            identidad[p][l] = identidad[p][l] - coeficiente * identidad[k][l];
          }
        }
      }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            resultado[cont].innerHTML = new Fraction(matriz[i][j]).toLatex();
            inversa[cont].innerHTML= new Fraction(identidad[i][j]).toLatex();
            cont++;
        }
    }
    // Devolvemos la matriz identidad
  }
  
// Mostramos la matriz identidad
function Calcular(){
    var matg=new Array();
    var matd=new Array();
    var cont=0;
    var gauss=document.getElementsByName("Gauss Jordan");
    console.log(gauss)
    for(var i=0;i<gauss.length;i++){
        gauss[i].removeAttribute("hidden");
    }
    if (n==m){
        var inversatt=document.getElementById("invt");
        var inversa=document.getElementById("inver");
        inversa.removeAttribute("hidden");
        inversatt.innerHTML="Inversa";
    }
    else{
        var inversat=document.getElementById("invt");
        var inversaa=document.getElementById("inver");
        inversaa.setAttribute("hidden",true);
        inversat.innerHTML="No hay inversa";
    }
    var error=document.getElementsByName("mat");
    for(var i=0;i<error.length;i++){
        //error[i].value=0;
    }
    // [[1,2,3],[1,2,3],[2,3,4]]
    for(var i=0;i<n;i++){
        matg[i]=new Array();
        matd[i]=new Array();
        for(var j=0;j<m;j++){
            matg[i][j]=document.getElementsByName("mat")[cont].value;
            matd[i][j]=document.getElementsByName("mat")[cont].value;
            cont++;
        }
    }
    cont=0;
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            matg[i][j]=parseFloat(matg[i][j]);
            matd[i][j]=parseFloat(matg[i][j]);
        }
    }
    console.log(matg);
    console.log(matd);
    determinanteGauss(matd);
    gaussJ(matg);
}


function agñadeFila(){
    esconder();
    n++;
    if(n>2){
        var comprobar = document.getElementById('reduccionf');
        comprobar.removeAttribute("hidden")
    }
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    var matrizi=document.getElementById("inver").firstElementChild;
    var elementoEntrada = document.createElement('tr');
    var elementoEntradar = document.createElement('tr');
    var elementoEntradai = document.createElement('tr');
    matriz.appendChild(elementoEntrada);
    matrizr.appendChild(elementoEntradar);
    matrizi.appendChild(elementoEntradai);
    console.log(matriz.childNodes);
    for(var i=0;i<m;i++){
        //agregar el elemento a cada celda del input
        var elementoTabla=document.createElement('td');
        var element= document.createElement('input');
        element.setAttribute('name','mat');
        element.setAttribute('placeholder','0');
        element.setAttribute('onkeypress','return error(event);');
        elementoTabla.appendChild(element);
        elementoEntrada.appendChild(elementoTabla);
        //agregar el elemento a cada label del resultado
        var elementoTablar=document.createElement('td');
        var elementr= document.createElement('label');
        elementr.innerHTML =0;
        elementr.setAttribute('name','res');
        elementoTablar.appendChild(elementr);
        elementoEntradar.appendChild(elementoTablar);
        //agregar el elemento a cada label de la matriz inversa
        var elementoTablai=document.createElement('td');
        var elementi= document.createElement('label');
        elementi.innerHTML =0;
        elementi.setAttribute('name','inv');
        elementoTablai.appendChild(elementi);
        elementoEntradai.appendChild(elementoTablai);
    }
}
function reduceFila(){
    esconder();
    n--;
    if(n<=2){
        var comprobar = document.getElementById('reduccionf');
        comprobar.setAttribute("hidden","true");
    }
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    var matrizi=document.getElementById("inver").firstElementChild;
    if(matriz.lastChild.nodeType==1){
        matriz.removeChild(matriz.lastChild);
        matrizr.removeChild(matrizr.lastChild);
        matrizi.removeChild(matrizi.lastChild);
    }
    else{
        matriz.removeChild(matriz.lastChild);
        matriz.removeChild(matriz.lastChild);
        matrizr.removeChild(matrizr.lastChild);
        matrizr.removeChild(matrizr.lastChild);
        matrizi.removeChild(matrizi.lastChild);
        matrizi.removeChild(matrizi.lastChild);
    }
}
function añadeColumna(){
    esconder();
    m++;
    if(m>2){
        var comprobar = document.getElementById('reduccionc');
        comprobar.removeAttribute("hidden")
    }
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    var matrizi=document.getElementById("inver").firstElementChild;
    for (var filas of matriz.childNodes) {
        if(filas.nodeType==1){
            //agregar el elemento a cada celda del input
            var elementoTabla=document.createElement('td');
            var element= document.createElement('input');
            element.setAttribute('name','mat');
            element.setAttribute('placeholder','0');
            element.setAttribute('onkeypress','return error(event);');
            elementoTabla.appendChild(element);
            filas.appendChild(elementoTabla);
        }
    }
    for(var filasr of matrizr.childNodes){
        //agregar el elemento a cada label del resultado
        if(filasr.nodeType==1){
            var elementoTablar=document.createElement('td');
            var elementr= document.createElement('label');
            elementr.innerHTML = '0';
            elementr.setAttribute('name','res');
            elementoTablar.appendChild(elementr);
            filasr.appendChild(elementoTablar);
        }
    }
    for(var filasi of matrizi.childNodes){
        //agregar el elemento a cada label del resultado
        if(filasi.nodeType==1){
            var elementoTablai=document.createElement('td');
            var elementi= document.createElement('label');
            elementi.innerHTML = '0';
            elementi.setAttribute('name','inv');
            elementoTablai.appendChild(elementi);
            filasi.appendChild(elementoTablai);
        }
    }
}
function reduceColumna(){
    esconder();
    m--;
    if(m<=2){
        var comprobar = document.getElementById('reduccionc');
        comprobar.setAttribute("hidden","true");
    }
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    var matrizi=document.getElementById("inver").firstElementChild;
    for (var filas of matriz.childNodes) {
       if(filas.nodeType==1){
            filas.removeChild(filas.lastChild);       
       }
    }
    for (var filasr of matrizr.childNodes) {
        if(filasr.nodeType==1){
            filasr.removeChild(filasr.lastChild);         
        }
    }
    for(var filasi of matrizi.childNodes){
        if(filasi.nodeType==1){
            filasi.removeChild(filasi.lastChild);         
        }
    }
}
function error(evt){
    if(window.event){
        keynum=evt.keyCode;
    }
    else{
        keynum=evt.which;
    }
    if(keynum>47 && keynum<58 || keynum==46 || keynum==13 || keynum==45){
        return true;
    }
    else{
        alert("Ingresar solo numeros")
        return false;
    }
}
function esconder(){
    var gauss=document.getElementsByName("Gauss Jordan");
    for(var i=0;i<gauss.length;i++){
        gauss[i].setAttribute("hidden",true);
    }
    var inversaa=document.getElementById("inver");
    inversaa.setAttribute("hidden",true);
}
function limpiar(){
    var limpieza = document.getElementsByName("mat");
    //todo se vuelve a esconder
    esconder();
    if(n>2){
        for(var i=0;i<n-2;i++){
            reduceFila();
        }
        if(n>2) limpiar();
    }
    if(m>2){
        for(var i=0;i<m-2;i++){
            reduceColumna();
        }
        if(m>2) limpiar();
    }
    for (var i=0; i<limpieza.length; i++){
        limpieza[i].value='';
    }
}
function arrastre(evt){
    evt.preventDefault();
    console.log("arrastre");
}
function soltar(evt){
    limpiar();
    evt.preventDefault();
    var lista= new Array();
    var numc=0;
    var bandera = 1;
    var bandera2=1;
    console.log("soltar");
    console.log(evt.dataTransfer.items[0].type);
    if(evt.dataTransfer.items[0].type=="text/plain"){
        var contenido=evt.dataTransfer.items[0].getAsFile();
        var lectura= new FileReader();
        lectura.onload=function(){
            var filas = lectura.result.trim().split(/\r?\n/);
            for(var i=0; i<filas.length; i++){
                filas[i] = filas[i].trim().replaceAll(/\s{2,}/g," ")
                if(filas[i]==""){
                    filas.splice(i,1);
                }
            }
            for(var i=0; i<filas.length; i++){
                var columnas = filas[i].split(" ");
                if(bandera==1){
                    numc=columnas.length;
                    bandera=0;
                }
                else{
                    if(columnas.length!=numc){
                        alert("Formato incorrecto");
                        break;
                    }
                }
                for(var j=0; j<columnas.length; j++){
                    lista.push(columnas[j]);
                }
            }
            for(var i=0; i<lista.length; i++){
                if(lista[i]!=0){
                    lista[i]=parseFloat(lista[i]);
                }
                if(!lista[i]){
                    alert("Solo numeros");
                    bandera2=0;
                    break;
                }
            }
            if(bandera2==1){
                if(filas.length>2){
                    for(var i=0; i<filas.length - 2; i++){
                        agñadeFila();
                    }
                }
                if(numc>2){
                    for(var i=0; i<numc - 2; i++){
                        añadeColumna();
                    }
                }
                var reemplazo=document.getElementsByName("mat");
                for(var i=0; i<reemplazo.length; i++){
                    reemplazo[i].value=lista[i];
                }
            }
            console.log(filas);
            console.log(lista);
        }
        lectura.readAsText(contenido);
    }
    else {
        alert("Solo se aceptan archivos de texto");
    }
}
