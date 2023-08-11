const getAutomationResults = async () => {
  try {
    const response = await fetch("/springboot/automation/results");
    const data = await response.json();

    // Get table body element
    const tableBody = document.getElementById("data");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Loop through data and add rows to table
    data.forEach((result) => {
      const row = tableBody.insertRow();
      const nameCell = row.insertCell();
      const link = document.createElement("a");
      link.href = `/springboot/automation/results/screenshots?testCase=${result.name}`;
      link.textContent = result.name;
      nameCell.appendChild(link);
      row.insertCell().textContent = result.status;
      row.insertCell().textContent = result.message;
    });
  } catch (error) {
    console.error(error);
  }
};

getAutomationResults();
