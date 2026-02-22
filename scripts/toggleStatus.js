jobCardContainer.addEventListener("click", function (ele) {
  let isAlltab = isAllTabSwicth();

  if (ele.target.classList.contains('job-interview-btn')) {
    let parent = ele.target.parentNode.parentNode;
    let intId = parent.id;
    //console.log('intintint');
    // status div color and name interactivey
    statusDiv(parent.querySelector(".status-div"), "bg-green-400", "INTERVIEW");

    companyName.forEach((job) => {
      // check tab selection all or rejected or interview tab
      if (!isAlltab && intId === job.id) {
       // console.log(job.status)
        job.status = "INTERVIEW";
        

      }
      if (job.status === "REJECTED" && isAlltab && intId === job.id) {
        //console.log(job.status)
        job.status = "INTERVIEW";
        parent.remove();

      }

      // if (job.id === intId) {
      //   job.status = "INTERVIEW";
      //   console.log(job.status);
      // }
    });

    // if job container is empty t
    // hen run this fuction to generate empty html
    if (jobCardContainer.children.length === 0) isEmpty();
  } else if (ele.target.classList.contains('job-rejected-btn')) {
    let parentt = ele.target.parentNode.parentNode;

    // status div color and name interactivey
    statusDiv(parentt.querySelector(".status-div"), "bg-red-400", "REJECTED");

    let rjctId = parentt.id;

    companyName.forEach((job) => {
      // if tab is interview but client switch to rejected it will remove from interview tab
       if (!isAlltab && rjctId === job.id) {
        //console.log(job.status)
        job.status = "REJECTED";
        

      }
      if (job.status === "INTERVIEW" && isAlltab && rjctId === job.id) {
        //console.log(job.status)
        job.status = "REJECTED";
        parentt.remove();

      }
    });

    // if job container is empty then run this fuction to generate empty html
    if (jobCardContainer.children.length === 0) isEmpty();

  } else if (ele.target.classList.contains("delete")) {
    // if client click delete icon on the right

    let parentx = ele.target.parentNode.parentNode;
    let containerDiv = parentx.parentNode;

    let remobeId = parentx.id;
    parentx.remove();
    let currentStatus = document.querySelector(".current-status");
    if (currentStatus) {
      currentStatus.innerText = containerDiv.children.length;
    }

    // if job container is empty then run this fuction to generate empty html
    if (jobCardContainer.children.length === 0) isEmpty();

    // filter main array to remove deleted item
    companyName = companyName.filter((job) => job.id != remobeId);

    updateDashboard();
  }

  //delete function end

  updateDashboard();
});
