const DB = {
    av: [
        {id:1, libelle: 'Costume', prix:400_000, qte:12, img:'https://gstore.sn/wp-content/uploads/2022/12/Ensemble-costume-3-pieces-4.jpeg'},
        {id:2, libelle: 'Chemise', prix:15_000, qte:12, img:'https://cdn.monoprix.fr/cdn-cgi/image/width=1900,quality=80,format=auto,metadata=none/assets/images/fashion/3612305316914/2/1900x1900.jpg'},
        {id:3, libelle: 'Robe', prix:40_000, qte:12, img:'https://cdn0.mariages.net/cat/robes-soiree/tarik-ediz/te-45--mt20_2x_793441.jpg'},
        {id:4, libelle: 'Hijab', prix:10_000, qte:12, img:'https://static.vecteezy.com/ti/vecteur-libre/p3/15326074-femme-musulmane-elegante-et-branchee-en-hijab-mode-illustrationle-dessin-au-trait-isole-pour-la-mode-boutique-vectoriel.jpg'},
        {id:5, libelle: 'jalaba', prix:7_000, qte:12, img:'https://media.jumiadeals.com/sn_live/026b5944fd62408edeef679.mobile-gallery-large.jpg'},
    ]
};
//
const inputArticle = document.querySelector('#article');
const infoArticle = document.querySelector('#infoArticle');
// const confirmation = document.querySelector('#confirmation');
// const inputArticle = document.getElementById('article');


  //events
  inputArticle.addEventListener('input',()=>{
    let av = inputArticle.value;
    if(av.length < 3){ // Avoie au mois 3 caracteres
        infoArticle.innerHTML = '';
        return;
    }

    //rechercher l'articles
    articleFound = findArticleByLibelle(av);
    articleFound = articleFound.length == 0 ? null : articleFound[0];
    // if(findArticleByLibelle().length ==0){
    //     articleFound = null;
    // }else{
    //     articleFound = findArticleByLibelle(av)[0];
    // }
    printArticle(articleFound);
  });

  function findArticleByLibelle(motCle){
    return DB.av.filter(a => a.libelle.toUpperCase() === motCle.toUpperCase());
  }

  function printArticle(article){
    let html= '';
    if(article != null){
        html = `<h4>${article.libelle + ' | ' + article.prix }</h4>`;
        html += `<img width='100px' src='${article.img}'/>`;
    }else{
        html = confirmation();
    }
    
    infoArticle.innerHTML = html;
  }

  function confirmation(){
    return `<div class="row border text-center" id="confirmation">
        <h4>Article introuvble!</h4>
        <h6>Voulez-vous l'ajouter?</h6>
        <p>
            <button onclick="printForm()" type="button" class="btn btn-outline-success me-3">oui</button>|
            <button onclick="annuler()" type="button" class="btn btn-outline-danger ms-2">non</button>
        </p>
    </div>`;
  }

  function formAdd(){
    return `<div class="row border text-center p-4">
    <h4>Nouvel Aricle :</h4>
    <div class="form-group">
        <label for="prix">Prix</label>
        <input id="prix" type="number" class="form-control">
    </div>
    <div class="form-group">
        <label for="qte">Quantité</label>
        <input id="qte" type="number" class="form-control">
    </div>
    <div class="form-group">
        <label for="img">Image</label>
        <input id="img" type="text" class="form-control">
    </div>
    <div class="form-group">
        <button onclick="saveArticle()" type="button" class="btn btn-sm btn-primary mt-2">Enregistrer</button> | 
        <button type="button" onclick="annuler()" class="btn btn-sm btn-danger mt-2">Annuler</button>
    </div>
</div>`;
  }

  function annuler(){
    inputArticle.value = '';
    infoArticle.innerHTML = '';
  }

  function printForm(){
    infoArticle.innerHTML = formAdd();
  }

  function saveArticle(){
    const prix = document.querySelector('#prix').value;
    const qte = document.querySelector('#qte').value;
    const img = document.querySelector('#img').value;
    const libelle = article.value;
    const id = DB.av.length + 1;
    //enregistrer dans la base
    DB.av.push({
        id, 
        libelle, 
        prix, 
        qte,
        img,
    });
    annuler();
  }