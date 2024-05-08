document.addEventListener("DOMContentLoaded", function() {
    fetch('parking.json')
        .then(response => response.json())
        .then(data => {
            const parkingSpacesContainer = document.getElementById('parkingSpaces');
            const foyParkingLot = data.parking_lots.find(lot => lot.name === "Foy");
            const parkingSpaces = foyParkingLot.spaces;
            parkingSpaces.forEach(space => {
                const spaceDiv = document.createElement('div');
                spaceDiv.className = `parking-space ${space.availability}`;
                spaceDiv.textContent = space.id;
                parkingSpacesContainer.appendChild(spaceDiv);
            });
        });
});