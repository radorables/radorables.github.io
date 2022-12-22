function generateGallery(){
	for (let i = 0; i < 9; i++) {
		randomINT = getRandomInt(1, 10000);
		//console.log("generate random Gallery: " + randomINT);
		const divString = '<div class="col"><img src="./assets/img/nfts/' + randomINT.toString() + '.jpg" class="gallery-item" alt="gallery"></div>';
		document.getElementById("nftgallery").innerHTML +=  divString;
	}
}

document.getElementById("nftfilter").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    nftshowbtn();
  }
});

// click on "show" button
function nftshowbtn(){
	const searchModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
	//const input = document.querySelector(".form-control");
	const input = document.getElementById("nftfilter");
	let filter = input.value;
	let nftpath = 'assets/img/nfts/' + filter + '.jpg'
  let traitpath = 'assets/img/traitcards/traitcard_' + filter + '.png'
	document.querySelector(".modal-nft-img").src = nftpath;
  document.querySelector(".modal-card-img").src = traitpath;
	searchModal.show();
}

// show Modal on NFT Gallery item
document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item")){
		 const src = e.target.getAttribute("src");
		 const filename = src.replace(/^.*[\\\/]/, '')
		 const traitpath = 'assets/img/traitcards/traitcard_' + filename.replace(/\.[^.]+$/, '.png');
		 document.querySelector(".modal-nft-img").src = src;
		 document.querySelector(".modal-card-img").src = traitpath;
		 const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
		 myModal.show();
	}
})

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
