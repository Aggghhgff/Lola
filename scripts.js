const gameMods = [ 
    { name: '0.66 mod menu stumble guys', image: 'https://www.google.com/imgres?q=stumble%20guys%20image&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2FOci7f4WR0JShbn-n5hnwubbXaMssleb2b1Dv7AMOzFFcgstIdC9kg-E3LHx3em8RCaLf&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.kitkagames.fallbuddies%26hl%3Den_US&docid=JvS05nKW1no3_M&tbnid=qXeQlRLFXYt3rM&vet=12ahUKEwiFo_C5xdiFAxWWxTgGHd36CNsQM3oECGgQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwiFo_C5xdiFAxWWxTgGHd36CNsQM3oECGgQAA' },
    { name: 'Mod 2', image: 'mod2.jpg', downloadLink: 'https://example.com/mod2.zip' },
    { name: 'Mod 3', image: 'mod3.jpg', downloadLink: 'https://example.com/mod3.zip' },
    // Add more mods here
];

const gameModsContainer = document.getElementById('gameMods');
const searchInput = document.getElementById('searchInput');

function renderGameMods(mods) {
    gameModsContainer.innerHTML = '';
    mods.forEach(mod => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${mod.image}" alt="${mod.name}">
            <h2>${mod.name}</h2>
            <button onclick="window.location.href='${mod.downloadLink}'">Download</button>
        `;
        gameModsContainer.appendChild(card);
    });
}

renderGameMods(gameMods);

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMods = gameMods.filter(mod => mod.name.toLowerCase().includes(searchTerm));
    renderGameMods(filteredMods);
});





/* code of pop up st */

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("popup").style.display = "block";
    }, 600); // 2 minutes in milliseconds
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


/* end of pop up code */


/* verify code animation */
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.verification-animation').style.visibility = 'visible';
});


/* end of verify code */

/* st of background animation*/
document.addEventListener("DOMContentLoaded", function() {
  const colors = ['#FF5733', '#33FF57', '#5733FF']; // Add your desired colors here
  const background = document.querySelector('.background');

  let currentIndex = 0;

  function changeBackground() {
    background.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(changeBackground, 2000); // Change color every 2 seconds
  }

  changeBackground();
});




document.addEventListener("DOMContentLoaded", function() {
  var chatIcon = document.getElementById("chatIcon");
  var chatGuide = document.getElementById("chatGuide");

  chatIcon.addEventListener("click", function() {
    chatGuide.style.display = chatGuide.style.display === "block" ? "none" : "block";
  });
});




