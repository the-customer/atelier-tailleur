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
        html = `<h4> Article introuvable!</h4> <h6>Voulez-vous l'ajouter?</h6>`;
        html += `
            <button type='button' class='btn btn-outline-success me-2'>Oui</button> | 
            <button type='button' class='btn btn-outline-danger ms-2'>Non</button>
        `
    }
    
    infoArticle.innerHTML = html;
  }