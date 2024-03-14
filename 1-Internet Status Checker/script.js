// Add an event listener to the window object that listens for the 'load' event and calls the checkInternetConnection function
window.addEventListener("load",checkInternetConnection);

// Function to check the internet connection status
function checkInternetConnection(){
    // Select the elements for displaying status, IP address, and network strength
    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressText');
    const networkStrengthText = document.getElementById('networkStrengthText');

     // Set the status text to 'checking...'
    statusText.textContent = 'checking...';

    // Check if the browser is online
    if(navigator.onLine){
         // If online, fetch the public IP address using a third-party API
        fetch('https://api.ipify.org?format=json')
        .then((response) => response.json())
        .then((data) => {

            // Display the IP address and set status text to 'Connected'
            ipAddressText.textContent = data.ip;
            statusText.textContent = 'Connected';

             // Get the network connection information and calculate network strength
            const connection = navigator.connection;
            const networkStrength = connection ? connection.downlink + 'Mbps' : "Unknown";

             // Display the network strength
            networkStrengthText.textContent = networkStrength;

        })
        .catch(() => {
             // If there is an error, set status text to 'Disconnected' and display dashes for IP address and network strength
            statusText.textContent = 'Disconnected';
            ipAddressText.textContent = '-';
            networkStrengthText.textContent = '-';
        })
    } else {
        // If offline, set status text to 'Disconnected' and display dashes for IP address and network strength
        statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '-';
        networkStrengthText.textContent = '-'

    }
}