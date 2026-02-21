let tabParent = document.getElementById('job-tab-btn');
let allTabBtn = document.querySelectorAll('.tab-btn');

tabParent.addEventListener("click",function(clickButton){

    // remobe defult select color 
    allTabBtn.forEach((elm) => {
        elm.classList.remove('btn-info');
        elm.classList.remove('text-white')
        elm.classList.add('text-gray-600');
    })

    // add select color to tab btn 

    clickButton.target.classList.add('btn-info');
    clickButton.target.classList.remove('text-gray-600');
    clickButton.target.classList.add('text-white')

    if(clickButton.target.id === 'tab-all'){
        generateJobCard(companyName);
    }else if(clickButton.target.id === 'tab-interview'){
        let interviewArray = companyName.filter(job => job.status === 'INTERVIEW');
        
        generateJobCard(interviewArray);
    }else{
        let rejectedArray = companyName.filter(job => job.status === 'REJECTED');
        generateJobCard(rejectedArray);
    }
})