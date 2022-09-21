/* UC4: Display Employee Details in Tabular Format using Template Literals */

window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

// Template literal ES6 feature
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
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
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}