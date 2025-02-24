// Function to generate list items dynamically
function populateList(data, elementId) {
    const list = document.getElementById(elementId);
    list.innerHTML = ""; // Clear old data

    data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.name}</strong> <br>
            <b>Location:</b> ${item.location || "N/A"} <br>
            <b>Date:</b> ${item.date} <br>
            <b>Description:</b> ${item.description} <br>
            ${item.link ? `<a href="${item.link}" target="_blank">More Info</a>` : ""}
        `;
        list.appendChild(li);
    });
}

// Call functions to populate lists
window.onload = function () {
    populateList(publications, "pub-list");
    populateList(events, "event-list");
    populateList(conferences, "conference-list");
    populateList(awards, "award-list");
};
