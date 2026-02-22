let tabParent = document.getElementById('job-tab-btn');
let allTabBtn = document.querySelectorAll('.tab-btn');
let jobStatusQ = document.querySelector('.job-status-q');
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

function isAllTabSwicth(){
    return !((document.querySelector('#tab-all') ).classList.contains('btn-info'));
}
