jobCardContainer.addEventListener("click", function (ele) {
  let isAlltab = isAllTabSwicth();


  if (ele.target.id === "job-interview-btn") {
    let parent = ele.target.parentNode.parentNode;
    let intId = parent.id;

    // status div color and name interactivey
    statusDiv((parent.querySelector('.status-div')),"bg-green-400","INTERVIEW")
   

    companyName.forEach((job) => {

    // check tab selection all or rejected or interview tab


      if (job.status === "REJECTED" && isAlltab) {
        parent.remove();
      }
      if (job.id === intId) {
        job.status = "INTERVIEW";
      }
    });

     // if job container is empty t
     // hen run this fuction to generate empty html
    if(jobCardContainer.children.length === 0)isEmpty();


  } else if (ele.target.id === "job-rejected-btn") {


    let parent = ele.target.parentNode.parentNode;

    
    // status div color and name interactivey
    statusDiv((parent.querySelector('.status-div')),"bg-red-400","REJECTED")

    let rjctId = parent.id;


    companyName.forEach((job) => {
      // if tab is interview but client switch to rejected it will remove from interview tab
      if (job.status === "INTERVIEW" && isAlltab) {
        parent.remove();
      }
      if (job.id === rjctId) {
        job.status = "REJECTED";
      }


    });

     // if job container is empty then run this fuction to generate empty html
    if(jobCardContainer.children.length === 0)isEmpty();


  } else if (ele.target.classList.contains("delete")) {
    
    let parent = ele.target.parentNode.parentNode;
    let containerDiv = parent.parentNode;

    let remobeId = parent.id;
    parent.remove();
    let currentStatus = document.querySelector(".current-status");
    if (currentStatus) {
      currentStatus.innerText = containerDiv.children.length;
    }

    // if job container is empty then run this fuction to generate empty html
    if(jobCardContainer.children.length === 0)isEmpty();
    

    companyName = companyName.filter((job) => job.id != remobeId);
    updateDashboard();
  }

  //delete function end

  updateDashboard();
});
