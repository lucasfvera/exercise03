const shareLink = document.getElementById("share-icon");
const shareOptionsContainer = document.getElementById("share-options-container")
console.log(shareOptionsContainer.classList)

const toggleContainerView = ()=>{
    shareOptionsContainer.classList.toggle("hidden")
    return console.log("clicked")
}

shareLink.addEventListener("click",toggleContainerView)