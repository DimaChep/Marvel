async function start() {
  let characterCardBox = document.querySelector("#character-card_box");
  let characterModalBox = document.querySelector("#character-modal_box");
  let characters = await fetchCharacters();

  characterCardBox.innerHTML = getCharacterCards(characters).join("");
  characterModalBox.innerHTML = getCharacterModals(characters).join("");
}
