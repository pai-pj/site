function criaLinks(elementoHtml){
    var innerHTML = "<div class='row'>";
    var ct = 0;
    for (grupo of LINKS){
      innerHTML += "<div class='col-md-4'>";
      innerHTML += "<h2>"+grupo.titulo+"</h2>";
      innerHTML += "<p>"+grupo.subtitulo+"</p>";
      innerHTML += "<div class='list-group'>";
      innerHTML += getHtmlItens(ct,grupo);
      innerHTML += "</div>";
      innerHTML += "</div>";
      ct++;
    }
    elementoHtml.innerHTML = innerHTML;
  }
  
  function getHtmlItens(indice,grupo,nivel=0){
    var html = "";
    var ct = 0;
    for (item of grupo.itens){
      var count = indice + "_" + ct + "_" + nivel;
      var colorClass = ESTILOS_NIVEIS[nivel][ct % 2];
      //var colorClass = (ct % 2 == 0) ? "list-group-item-dark" : "list-group-item-secondary";
      if (item.url){
        html += "<a target='_blank' href='" + item.url + "' class='list-group-item list-group-item-action "+colorClass+"'>" + item.titulo + "</a>";
      }else{
        html+= "<div class='accordion' id='accordion_"+count+"'>";
        html+= "<a href='#'' id='a_"+ count + "' class='list-group-item list-group-item-action "+colorClass+"' data-toggle='collapse' data-target='#collapse_"+count+"' aria-expanded='true' aria-controls='collapse"+count+"'>"+item.titulo+"</a>";
        html+= "<div id='collapse_"+ count + "' class='collapse hide' aria-labelledby='a_"+ count + "' data-parent='#accordion_"+count+"'>";
        html+= getHtmlItens(ct,item,nivel+1);
        html+= "</div>";
        html+= "</div>";
      }
      ct ++;
    }
    return html;

  }