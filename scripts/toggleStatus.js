
jobCardContainer.addEventListener('click',function(ele){
    if(ele.target.id === 'job-interview-btn'){
        let parent = ele.target.parentNode.parentNode
        let intId = parent.id;
        companyName.forEach((job)=>{
            if(job.id === intId){
                job.status = 'INTERVIEW';
                
            }
        })
    }else if(ele.target.id === 'job-rejected-btn'){
        let parent = ele.target.parentNode.parentNode
        let rjctId = parent.id;
        console.log(rjctId);
        companyName.forEach((job)=>{
            if(job.id === rjctId){
                console.log(job.status)
                job.status = 'REJECTED';
                
            }
        })
        
    }else if(ele.target.classList.contains('delete')){
        
        let parent = ele.target.parentNode.parentNode;
        let containerDiv = parent.parentNode;
        
        let remobeId = parent.id;
        parent.remove();
        console.log(containerDiv.children.length)
        if(containerDiv.children.length === 0){

            jobCardContainer.innerHTML = generateEmptyHtml();
        }
        companyName = companyName.filter(job => job.id != remobeId);
    }
    
    //delete function


    updateDashboard();
    
})