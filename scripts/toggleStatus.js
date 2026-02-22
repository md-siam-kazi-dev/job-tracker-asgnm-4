
jobCardContainer.addEventListener('click',function(ele){
    let isAlltab = isAllTabSwicth();
    if(ele.target.id === 'job-interview-btn'){
        let parent = ele.target.parentNode.parentNode
        let intId = parent.id;
        console.log(isAllTabSwicth())
        
        companyName.forEach((job)=>{
           
            if(job.status === 'REJECTED' && isAlltab){
                    parent.remove()
                }
            if(job.id === intId){
                job.status = 'INTERVIEW';
                
            }
        })
        
    }else if(ele.target.id === 'job-rejected-btn'){
        let parent = ele.target.parentNode.parentNode
        let rjctId = parent.id;
        
        companyName.forEach((job)=>{

             // if tab is interview but client switch to rejected it will remove from interview tab 
            if(job.status === 'INTERVIEW' && isAlltab){
                    parent.remove()
            }
            if(job.id === rjctId){

               
                
               
                job.status = 'REJECTED';
                
            }
        })
        
    }else if(ele.target.classList.contains('delete')){
        
        let parent = ele.target.parentNode.parentNode;
        let containerDiv = parent.parentNode;
        
        let remobeId = parent.id;
        parent.remove();
        let currentStatus = document.querySelector(".current-status");
        if(currentStatus){
        	currentStatus.innerText = containerDiv.children.length;
}
        if(containerDiv.children.length === 0){

            jobCardContainer.innerHTML = generateEmptyHtml();
        }
        companyName = companyName.filter(job => job.id != remobeId);
         updateDashboard();
    }
    
    //delete function end


    updateDashboard();
    
})