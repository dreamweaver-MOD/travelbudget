document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const totalBudget = parseFloat(document.getElementById('total-budget').value);
    const hotelRatio = parseFloat(document.getElementById('hotel-ratio').value) / 100;
    const foodRatio = parseFloat(document.getElementById('food-ratio').value) / 100;
    const transportationRatio = parseFloat(document.getElementById('transportation-ratio').value) / 100;

    const hotelBudget = totalBudget * hotelRatio;
    const foodBudget = totalBudget * foodRatio;
    const transportationBudget = totalBudget * transportationRatio;

    document.getElementById('hotel-budget').textContent = `Hotel: $${hotelBudget.toFixed(2)}`;
    document.getElementById('food-budget').textContent = `Food: $${foodBudget.toFixed(2)}`;
    document.getElementById('transportation-budget').textContent = `Transportation: $${transportationBudget.toFixed(2)}`;
});
