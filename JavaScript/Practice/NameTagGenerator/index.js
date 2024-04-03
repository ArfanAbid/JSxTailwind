const name = document.getElementById("name");
const tagContainer = document.querySelector(".tags");

const getName= () =>{
    const tag = document.createElement("div");
    // tag.style="paras px-1 py-2 border-4 border-red-200 width-max  rounded-xl md:p-2";
    tag.classList.add("p-2", "px-4", "py-2", "border-4", "border-red-200", "rounded-xl", "md:p-2", "bg-white", "mt-2");

    tag.innerText=`Hey My name is ${name.value} .`;
    tagContainer.appendChild(tag);
}