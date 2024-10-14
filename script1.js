// Data for the Investment Breakdown pie chart
const investmentData = {
    labels: [
        'College Contribution (62%)',
        'Student Contribution (07%)',
        'Audience Contribution (31%)'
    ],
    datasets: [{
        label: 'Investment Breakdown',
        data: [31, 07, 62], // Percentage values
        backgroundColor: ['#FFFBE6', '#ffce56', '#ff6384'] // Colors for each section
    }]
};

// Configuration for the pie chart
const config = {
    type: 'pie',
    data: investmentData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                enabled: true
            }
        }
    }
};

// Render the pie chart when the page loads
window.onload = function() {
    const ctx = document.getElementById('investmentChart').getContext('2d');
    new Chart(ctx, config);
};
