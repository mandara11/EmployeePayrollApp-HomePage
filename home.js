// UC4:view Emp Payroll details in a TabularFormat fron JS file using Template Literals.
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) =>
{
 empPayrollList=getEmployeePayrollDataFromStorage();
 document.querySelector('.emp-count').textContent=empPayrollList.length;
 createInnerHtml();
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('EmployeePayrollList179')?
    JSON.parse(localStorage.getItem('EmployeePayrollList179')):[];
}

const createInnerHtml = () => {
    const headerHTml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    // let empPayrollData=createEmployeePayrollJSON()[0];
    let innerHtml = `${headerHTml}`;
    empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {

        /*  const innerHtml = `${headerHTml}
         <tr>
         <td><img class="profile"  alt="" src="employee1.jpg"></td>
         <td>Narayan</td>
         <td>Male</td>
         <td><div class="dept-label">HR</div>
         <div class="dept-label">Finance</div></td>
         <td>30000</td>
         <td>1 Nov 2020</td>
         <td>
             <button onclick="remove(this)">Delete</button>
             <button onclick="edit(this)">Edit</button>
         </td>
     </tr>
         `; */


        //Dynamic part
        innerHtml = `${innerHtml}
    <tr>
    <td><img class="profile"  alt="" src=${empPayrollData._profilePic}></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>

    <td>${getDeptHtml(empPayrollData._department)}</td>
    
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
        <button name="${empPayrollData._id}" onclick="remove(this)">Delete</button>
        <button name="${empPayrollData._id}" onclick="edit(this)">Edit</button>
    </td>
</tr>
    `};
        document.querySelector('#display').innerHTML = innerHtml;
    
}

const getDeptHtml = (depList) => {
    let depHtml = '';
    for (const dept of depList) {
        depHtml = `${depHtml}<div class='dept-label'>${dept}</div>`
    }
    return depHtml;
}

const createEmployeePayrollJSON = () => 
{
    let empPayrollListLocal =
        [
            {
                _name: "Johny",
                _gender: 'female',
                _department: [
                    'Engineering','Finance'
                ],
                _salary: '500000',
                _startDate: '20 Jan 2019',
                _note: '',
                _id: new Date().getTime(),
                _profilePic: 'employee4.jpg'
            },
            {
                _name: "Sony",
                _gender: 'female',
                _department: [
                    'Engineering',
                    'HR'
                ],
                _salary: '400000',
                _startDate: '20 Jan 2019',
                _note: '',
                _id: new Date().getTime(),
                _profilePic: 'employee3.jpg'
            },
            {
                _name: "Pruthvi",
                _gender: 'female',
                _department: [
                    'Engineering'
                ],
                _salary: '6 00000',
                _startDate: '10 Feb 2019',
                _note: '',
                _id: new Date().getTime(),
                _profilePic: 'employee5.jpg'
            }
        ];
    return empPayrollListLocal;
}