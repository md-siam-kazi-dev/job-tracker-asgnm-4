function statusDiv(element,colorName,statusName){
    element.classList.remove('bg-gray-200','bg-green-400','bg-red-400');
    element.classList.add(colorName);

    element.innerText = statusName;
}