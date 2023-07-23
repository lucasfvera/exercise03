const shareLink = document.getElementById("share-icon");
const shareOptionsContainer = document.getElementById("share-options-container")
console.log(shareOptionsContainer.classList)

const toggleContainerView = (e)=>{
    shareOptionsContainer.classList.toggle("hidden")
    return console.log("clicked", e.target)
}

shareLink.addEventListener("click",toggleContainerView)