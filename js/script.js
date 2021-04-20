var listarEstados=function(){
    /*Criar um objeto */
    xhttp=new XMLHttpRequest();
    /*Tratar o evento de alteração do status e estado da conexao com o servidor */
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            /*Pega a resposta do servido */
            let dadosJSON=this.responseText;
            
            dadosJSON=JSON.parse(dadosJSON);
            
            let tbody=document.querySelector("tbody");
            tbody.innerHTML="";
            dadosJSON.forEach(function(item){
                let tr=document.createElement('tr');
                let id= document.createElement('td');
                id.appendChild(document.createTextNode(item.id));
                tr.appendChild(id);

                let nome= document.createElement('td');
                nome.appendChild(document.createTextNode(item.nome));
                tr.appendChild(nome);

                let uf= document.createElement('td');
                uf.appendChild(document.createTextNode(item.sigla));
                tr.appendChild(uf);

                let regiao= document.createElement('td');
                regiao.appendChild(document.createTextNode(item.regiao.nome));
                tr.appendChild(regiao);

                tbody.appendChild(tr);
            });
        };

        
    }
    
    xhttp.open("GET","https://servicodados.ibge.gov.br/api/v1/localidades/estados", true);
    xhttp.send();
    
}



listarEstados();
