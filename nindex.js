const wrapper=document.querySelector(".wrapper"),
editableInput=wrapper.querySelector(".editable"),
readOnlyInput=wrapper.querySelector(".readonly"),
placeholder=wrapper.querySelector(".placeholder"),
counter=wrapper.querySelector(".counter"),
button=wrapper.querySelector("button");

editableInput.onfocus=()=>{
    placeholder.style.color="#c5ccd3";

}
editableInput.onblurr=()=>{
    placeholder.style.color="#98a5b1"
}
editableInput.keyup=(e)=>{
    let element=e.target;
    validater(element);

}
editableInput.onkeypress=(e)=>{
    let element=e.target;
    validater(element);
    placeholder.style.display="none";
}
function validater(element){
    let text;
    let maxlength=100;
    let currentlen=element.innerText.length;
    if(currentlen<=0){
        placeholder.style.display="block";
        counter.style.display="none";
        button.classList.remove("active");
    }     
    else{
        placeholder.style.display="none";
        counter.style.display="block";
        button.classList.add("active");
    }  
    counter.innerText=maxlength-currentlen;
    if(currentlen>maxlength){
        let overtext=element.innerText.substr(maxlength);
        overtext=`<span class="highlight">${overtext}</span>`;
        text=element.innerText.substr(0,maxlength)+overtext;
        readOnlyInput.style.zIndex="1";
        counter.style.color="#e0245e";
        button.classList.remove("active");
    }
    else{
        readOnlyInput.style.zIndex="-1";
        counter.style.color="#333";
    }
    readOnlyInput.innerHTML=text;

}



