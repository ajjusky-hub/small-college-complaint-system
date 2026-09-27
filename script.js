document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelectorAll("input")[0].value;
    let department = document.querySelectorAll("input")[1].value;
    let complaint = document.querySelector("textarea").value;

    if (name === "" || department === "" || complaint === "") {
        alert("Please fill all the details.");
        return;
    }

    let text = complaint.toLowerCase();

    let category = "Other";
    let priority = "Low";

    // Category detection
    if (
        text.includes("wifi") ||
        text.includes("wi-fi") ||
        text.includes("internet") ||
        text.includes("network")
    ) {
        category = "Internet / Wi-Fi";
    }

    else if (
        text.includes("fan") ||
        text.includes("light") ||
        text.includes("water") ||
        text.includes("chair") ||
        text.includes("table")
    ) {
        category = "Maintenance";
    }

    else if (
        text.includes("teacher") ||
        text.includes("class") ||
        text.includes("exam") ||
        text.includes("marks")
    ) {
        category = "Academics";
    }

    else if (
        text.includes("bus") ||
        text.includes("transport")
    ) {
        category = "Transport";
    }

    else if (
        text.includes("hostel") ||
        text.includes("room")
    ) {
        category = "Hostel";
    }


    // Priority detection
    if (
        text.includes("urgent") ||
        text.includes("emergency") ||
        text.includes("danger") ||
        text.includes("not working")
    ) {
        priority = "High";
    }

    else if (
        text.includes("problem") ||
        text.includes("issue")
    ) {
        priority = "Medium";
    }


    let complaintId =
        "C" + Math.floor(Math.random() * 9000 + 1000);

    let complaintData = {

        id: complaintId,
        name: name,
        department: department,
        complaint: complaint,
        category: category,
        priority: priority,
        status: "Pending"

    };


    let complaints =
        JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push(complaintData);

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );


    alert(
        "Complaint submitted successfully!\n\n" +
        "Complaint ID: " + complaintId +
        "\nCategory: " + category +
        "\nPriority: " + priority +
        "\nStatus: Pending"
    );


    document.querySelector("form").reset();

});