var nc=2,mc=2
function mostrarCB(){
    var esconde=document.getElementsByName("matrices");
    var muestra=document.getElementsByName("cambiobase");
    for(var i=0;i<esconde.length;i++){
        esconde[i].setAttribute("hidden",true);
    }
    for(var i=0;i<muestra.length;i++){
        muestra[i].removeAttribute("hidden");
    }
}
function agñadeFilaCB(){
    //esconderCB();
    nc++;
    if(nc>2){
        var comprobar = document.getElementById('reduccionfcb');
        comprobar.removeAttribute("hidden")
    }
    var matriz=document.getElementById("matcb1t").firstElementChild;
    var matrizr=document.getElementById("matcb2t").firstElementChild;
    var matrizi=document.getElementById("rescb1t").firstElementChild;
    var elementoEntrada = document.createElement('tr');
    var elementoEntradar = document.createElement('tr');
    var elementoEntradai = document.createElement('tr');
    matriz.appendChild(elementoEntrada);
    matrizr.appendChild(elementoEntradar);
    matrizi.appendChild(elementoEntradai);
    console.log(matrizr.childNodes);
    for(var i=0;i<mc;i++){
        //agregar el elemento a cada celda del input
        var elementoTabla=document.createElement('td');
        var element= document.createElement('input');
        element.setAttribute('name','matcb');
        element.setAttribute('placeholder','0');
        element.setAttribute('onkeypress','return error(event);');
        elementoTabla.appendChild(element);
        elementoEntrada.appendChild(elementoTabla);
        //agregar el elemento a cada celda del input 2
        var elementoTablar=document.createElement('td');
        var elementr= document.createElement('input');
        elementr.setAttribute('name','matcb2');
        elementr.setAttribute('placeholder','0');
        elementr.setAttribute('onkeypress','return error(event);');
        elementoTablar.appendChild(elementr);
        elementoEntradar.appendChild(elementoTablar);
        //agregar el elemento a cada label del resultado
        var elementoTablai=document.createElement('td');
        var elementi= document.createElement('label');
        elementi.innerHTML =0;
        elementi.setAttribute('name','rescb');
        elementoTablai.appendChild(elementi);
        elementoEntradai.appendChild(elementoTablai);
    }
}
function reduceFilaCB(){
    esconderCB();
    nc--;
    if(nc<=2){
        var comprobar = document.getElementById('reduccionfcb');
        comprobar.setAttribute("hidden","true");
    }
    var matriz=document.getElementById("matcb1t").firstElementChild;
    var matrizr=document.getElementById("matcb2t").firstElementChild;
    var matrizi=document.getElementById("rescb1t").firstElementChild;
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
function añadeColumnaCB(){
    esconderCB();
    mc++;
    if(mc>2){
        var comprobar = document.getElementById('reduccionccb');
        comprobar.removeAttribute("hidden")
    }
    var matriz=document.getElementById("matcb1t").firstElementChild;
    var matrizr=document.getElementById("matcb2t").firstElementChild;
    var matrizi=document.getElementById("rescb1t").firstElementChild;
    for (var filas of matriz.childNodes) {
        if(filas.nodeType==1){
            //agregar el elemento a cada celda del input
            var elementoTabla=document.createElement('td');
            var element= document.createElement('input');
            element.setAttribute('name','matcb');
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
            var elementr= document.createElement('input');
            elementr.setAttribute('name','matcb2');
            elementr.setAttribute('placeholder','0');
            elementr.setAttribute('onkeypress','return error(event);');
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
            elementi.setAttribute('name','rescb');
            elementoTablai.appendChild(elementi);
            filasi.appendChild(elementoTablai);
        }
    }
}
function reduceColumnaCB(){
    esconderCB();
    mc--;
    if(mc<=2){
        var comprobar = document.getElementById('reduccionccb');
        comprobar.setAttribute("hidden","true");
    }
    var matriz=document.getElementById("matcb1t").firstElementChild;
    var matrizr=document.getElementById("matcb2t").firstElementChild;
    var matrizi=document.getElementById("rescb1t").firstElementChild;
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
function esconderCB(){
    var camb=document.getElementsByName("resultadocb");
    for(var i=0;i<camb.length;i++){
        camb[i].setAttribute("hidden",true);
    }
}
function limpiarCB(){
    var limpieza = document.getElementsByName("matcb");
    var limpieza2 = document.getElementsByName("matcb2");
    //todo se vuelve a esconder
    esconderCB();
    if(nc>2){
        for(var i=0;i<nc-2;i++){
            reduceFilaCB();
        }
        if(nc>2) limpiarCB();
    }
    if(mc>2){
        for(var i=0;i<mc-2;i++){
            reduceColumnaCB();
        }
        if(mc>2) limpiarCB();
    }
    for (var i=0; i<limpieza.length; i++){
        limpieza[i].value='';
        limpieza2[i].value='';
    }
}
function arrastreCB1(evt){
    evt.preventDefault();
    console.log("arrastre");
}
function arrastreCB2(evt){
    evt.preventDefault();
    console.log("arrastre");
}
function soltarCB1(evt){
    //limpiarCB();
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
                if(filas.length>nc){
                    for(var i=0; i<filas.length - 2; i++){
                        agñadeFilaCB();
                    }
                }
                if(numc>mc){
                    for(var i=0; i<numc - 2; i++){
                        añadeColumnaCB();
                    }
                }
                var reemplazo=document.getElementsByName("matcb");
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
function soltarCB2(evt){
    //limpiarCB();
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
                if(filas.length>nc){
                    for(var i=0; i<filas.length - 2; i++){
                        agñadeFilaCB();
                    }
                }
                if(numc>mc){
                    for(var i=0; i<numc - 2; i++){
                        añadeColumnaCB();
                    }
                }
                var reemplazo=document.getElementsByName("matcb2");
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
function CalcularCB(){
    var matcb1=new Array();
    var matcb2=new Array();
    var cont=0;
    var mresultado=document.getElementsByName("resultadocb");
    console.log(mresultado);
    for(var i=0;i<mresultado.length;i++){
        mresultado[i].removeAttribute("hidden");
    }
    if (nc!=mc){
        var tabla=document.getElementById("rescb1t");
        var texto=document.getElementById("rescb1tt");
        tabla.setAttribute("hidden",true);
        texto.innerHTML="No se puede hacer el cambio de base";
    }
    for(var i=0;i<nc;i++){
        matcb1[i]=new Array();
        matcb2[i]=new Array();
        for(var j=0;j<mc;j++){
            matcb1[i][j]=document.getElementsByName("matcb")[cont].value;
            matcb2[i][j]=document.getElementsByName("matcb2")[cont].value;
            cont++;
        }
    }
    cont=0;
    for(var i=0;i<nc;i++){
        for(var j=0;j<mc;j++){
            matcb1[i][j]=parseFloat(matcb1[i][j]);
            matcb2[i][j]=parseFloat(matcb2[i][j]);
        }
    }
    console.log(matcb1);
    console.log(matcb2);
    cambioBase(matcb1,matcb2);
}
function cambioBase(matriz1,matriz2) {
    var ban=0;
    var cont=0;
    var resultado=document.getElementsByName("rescb");
    // Aplicamos el método de Gauss-Jordan
    for (let k = 0; k < nc; k++) {
      ban=0;
      let pivot = matriz1[k][k];
      // Dividimos la fila k de la matriz original
      if (pivot==0){
        for(let q = k+1; q < nc; q++) {
            if(matriz1[q][k]>0 && ban==0){
                for (let r = 0; r < m; r++) {
                    matriz1[k][r] = matriz1[k][r] + matriz1[q][r];
                    matriz2[k][r] = matriz2[k][r] + matriz2[q][r];
                }
                ban=1;
            }
        }
        if(ban==0){
            for (let i = 0; i < nc; i++) {
                for (let j = 0; j < mc; j++) {
                    resultado[cont].innerHTML = new Fraction(matriz2[i][j]).toLatex();
                    //inversa[cont].innerHTML= identidad[i][j];
                    cont++;
                }
            }
            var tabla=document.getElementById("rescb1t");
            var texto=document.getElementById("rescb1tt");
            tabla.setAttribute("hidden",true);
            texto.innerHTML="No se puede hacer el cambio de base";
            return;
        }
        k=-1;
        continue;
      }
      for (let l = 0; l < mc; l++) {
        matriz1[k][l] = matriz1[k][l] / pivot;
        matriz2[k][l] = matriz2[k][l] / pivot;
      }
      // Modificamos las demás filas
      for (let p = 0; p < nc; p++) {
        if (p != k) {
          let coeficiente = matriz1[p][k];
          for (let l = 0; l < mc; l++) {
            matriz1[p][l] = matriz1[p][l] - coeficiente * matriz1[k][l];
            matriz2[p][l] = matriz2[p][l] - coeficiente * matriz2[k][l];
          }
        }
      }
    }
    for (let i = 0; i < nc; i++) {
        for (let j = 0; j < mc; j++) {
            resultado[cont].innerHTML = new Fraction(matriz2[i][j]).toLatex();
            cont++;
        }
    }
    // Devolvemos la matriz identidad
  }