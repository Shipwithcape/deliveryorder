// Capture the form submission event
document.getElementById("getquote").addEventListener("submit", function(event) {
  event.preventDefault();

  // Capture all form data
  const formData = {
      selectedService: document.querySelector("select[name='service-type']").value,
      name: document.querySelector("input[name='name']").value,
      email: document.querySelector("input[name='email']").value,
      phone: document.querySelector("input[name='phone']").value,
      state: document.querySelector("input[name='state']").value,
      country: document.querySelector("input[name='country']").value,
      province: document.querySelector("input[name='province']").value,
      homeOrOffice: document.querySelector("select[name='office-home']").value,
      buildingNumber: document.querySelector("input[name='building-number']").value,
      details: document.querySelector("textarea[name='details']").value
  };

  // Send the data to Google Sheets via Apps Script
  fetch("YOUR_APP_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => response.json())
  .then(data => {
      if (data.result === "success") {
          alert("Form submitted successfully!");
      } else {
          alert("There was an error submitting the form.");
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("There was an error connecting to the server.");
  });
});
