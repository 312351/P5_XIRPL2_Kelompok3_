const lihat = document.getElementById('id11');  // ID yang benar
const konten = document.getElementById('id12'); // Modal pertama

lihat.addEventListener('click', function() {
    if (konten.style.display === 'none' || konten.style.display === '') {
        konten.style.display = 'flex';  // Use 'flex' to center the modal properly
    } else {
        konten.style.display = 'none';  // Close the modal
    }
});

const lihatt = document.getElementById('id01');
const kontenn = document.getElementById('id02');
lihatt.addEventListener('click', function() {
    if (kontenn.style.display === 'none' || kontenn.style.display === '') {
        kontenn.style.display = 'flex';  // Use 'flex' to center the modal properly
    } else {
        kontenn.style.display = 'none';  // Close the modal
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField => {
        const table = inputField.closest("table").querySelectorAll("tbody tr");
        const headerCell = inputField.closest("th");
        const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
        const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
        const searchableCells = Array.from(table)
            .map(row => row.querySelectorAll("td")[columnIndex]);

        inputField.addEventListener("input", () => {
            const searchQuery = inputField.value.toLowerCase();

            for (const cell of searchableCells) {
                const row = cell.closest('tr');
                const value = cell.textContent.toLowerCase().replace(",", "");

                if (value.search(searchQuery) === -1) {
                    row.style.display = "none";  // Hide the row
                } else {
                    row.style.display = "";  // Show the row
                }
            }
        });
    });
});


