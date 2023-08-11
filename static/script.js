document.addEventListener("DOMContentLoaded", function () {
  const automationForm = document.getElementById("automation-options-form");

  automationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const testSuiteSelect = document.getElementById("test-suite");
    const selectedValue = testSuiteSelect.value;

    console.log("Selected value:", selectedValue);
    // Call API to Run selected Test Suite.

    // Make the API call using fetch()
    fetch(`/springboot/automation/run?suite=${selectedValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error calling API");
      })
      .then((data) => {
        console.log(data);
        window.location.href = "automation-results.html";
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const webServicesForm = document.getElementById("web-services-options-form");

  webServicesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const webServiceSelect = document.getElementById("web-service");
    const selectedValue = webServiceSelect.value;

    console.log("Selected value:", selectedValue);

    if (selectedValue == "Quota Manager Services") {
      window.location.href = "quota-manager-services.html";
    } else {
      window.location.href = "subscriber-services.html";
    }
  });
});
