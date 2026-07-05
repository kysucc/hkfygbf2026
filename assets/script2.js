jQuery(document).ready(function ($){
           

            const API_URL = "https://script.google.com/macros/s/AKfycbzu5luQwTKv3v-6oPMKhDysriSrFxCspGtXTLPB8kY66JghZOlXYlVvXSZfrEiCYW_4/exec";

        async function loadSheetData() {
        try {
            // CRITICAL: We DO NOT send custom headers here. 
            // Sending headers forces a "preflight" OPTIONS check, which Google blocks.
            const response = await fetch(API_URL, {
                method: "GET",
                mode: "cors"
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            
            // If the script sent an error wrapper back, catch it here
            if (data.error) {
                throw new Error(data.error);
            }

            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // Clear loading text

            // Loop through the data and build cards
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                
                // Uses fallback strings if columns don't match exactly
                card.innerHTML = `
                    <h3>${item.Name || item.name || 'No Name'}</h3>
                    <p><strong>Role:</strong> ${item.Role || item.role || 'N/A'}</p>
                    <p><strong>Location:</strong> ${item.Location || item.location || 'N/A'}</p>
                `;
                outputDiv.appendChild(card);
            });

        } catch (error) {
            console.error("Error fetching data:", error);
            document.getElementById('output').innerHTML = `
                <p style="color: red;">
                    <strong>Database Error:</strong><br>
                    ${error.message}
                </p>`;
        }
    }

    window.addEventListener('DOMContentLoaded', loadSheetData);






        });