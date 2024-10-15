let leads = [];

function addLead() {
    const name = prompt("Enter Lead Name:");
    const email = prompt("Enter Lead Email:");
    const phoneNumber = prompt("Enter Lead Phone Number:");
    const status = "New";
    const createdDate = new Date().toLocaleDateString();

    if (name && email && phoneNumber) {
        const lead = { name, email, phoneNumber, status, createdDate };
        leads.push(lead);
        displayLeads();
    }
}

function displayLeads() {
    const leadTableBody = document.getElementById('leadTableBody');
    leadTableBody.innerHTML = '';

    leads.forEach(lead => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.phoneNumber}</td>
            <td>${lead.status}</td>
            <td>${lead.createdDate}</td>
        `;
        leadTableBody.appendChild(row);
    });
}