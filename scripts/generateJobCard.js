let jobCardContainer = document.getElementById('job-card-container')

function generateJobCard(list){
    let card = "";
    
    if(list.length === 0){
        
        jobCardContainer.innerHTML = generateEmptyHtml();
        
    }else{
        list.forEach(job => {
        card += `<div class="job-card p-6 rounded-[8px] shadow-[0_0_5px_rgba(0,0,0,.1)] " id=${job.id}>


                <div class="job-heading mb-5 flex w-full justify-between items-center">
                    <div class="job-name">
                        <h3 class="font-semibold text-[22px] text-black mb-1">${job.companyName}</h1>
                            <p class="text-gray-500 font-medium text-[16px]">${job.role}</p>
                    </div>
                    
                        <img src="./assets/Trash.png" class=" delete rounded-full p-2 transition hover:scale-105 shadow-[0_0_5px_rgba(0,0,0,.2)] cursor-pointer">
                </div>

                <p class="text-gray-500 text-[16px] mb-5">${job.salaryDutyTimeLocation}</p>
                <div class="rounded-[8px] px-3 py-2 w-fit font-medium text-black bg-[#EEF4FF]">${job.status}</div>
                <p class="text-gray-900 text-[14px] mt-2 mb-5">${job.description}</p>
                <div class="job-status-btn">
                    <button class="btn cursor-pointer text-green-600 border-green-600" id="job-interview-btn">INTERVIEW</button>
                    <button class="btn cursor-pointer text-red-500 border-red-500" id="job-rejected-btn">REJECTED</button>
                </div>
            </div>`
    });
    jobCardContainer.innerHTML = card;
    }



    
    updateDashboard();

    
}