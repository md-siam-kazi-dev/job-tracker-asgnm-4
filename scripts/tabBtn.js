let tabParent = document.getElementById('job-tab-btn');
let allTabBtn = document.querySelectorAll('.tab-btn');
let jobStatusQ = document.querySelector('.job-status-q');
tabParent.addEventListener("click",function(clickButton){

    // remobe defult select color 
    
    if(clickButton.target.classList.contains('tab-btn')){
     allTabBtn.forEach((elm) => {
        elm.classList.remove('btn-info','text-white');
        
        elm.classList.add('text-gray-600');
     })
     clickButton.target.classList.add('btn-info','text-white');
    }

    // add select color to tab btn 

    
    
    

    if(clickButton.target.id === 'tab-all'){
        
        generateJobCard(companyName);
        jobStatusQ.innerHTML =`<span class='job-available'>${companyName.length}</span> jobs`;
    }else if(clickButton.target.id === 'tab-interview'){
        
        let interviewArray = companyName.filter(job => job.status === 'INTERVIEW');
        jobStatusQ.innerHTML =` <span class='current-status'>${interviewArray.length}</span> of <span class="job-available"></span> jobs`;
        generateJobCard(interviewArray);
    }else if(clickButton.target.id === 'tab-rejected'){
        
        let rejectedArray = companyName.filter(job => job.status === 'REJECTED');
        jobStatusQ.innerHTML =` <span class='current-status'>${rejectedArray.length}</span> of <span class="job-available"></span> jobs`;
        generateJobCard(rejectedArray);
    }
})

// return current tab is all or other 2 

function isAllTabSwicth(){
    return !((document.querySelector('#tab-all') ).classList.contains('btn-info'));
}
