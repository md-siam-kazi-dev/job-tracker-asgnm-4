function updateDashboard(){
    let allJobs = companyName.length;
    let interviewJobs = (companyName.filter((interview) => interview.status === "INTERVIEW")).length;
    let rejectedJobs = (companyName.filter((rejected) => rejected.status === "REJECTED")).length;

    document.querySelector('.dashboard-total').innerText = allJobs;
    document.querySelector('.dashboard-interview').innerText = interviewJobs;
    document.querySelector('.dashboard-rejected').innerText = rejectedJobs;

}