/*document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chart');
    const statusText = document.getElementById('status-text');

    if (!chartContainer) {
        console.error('Chart container not found!');
        return;
    }

    const chart = LightweightCharts.createChart(chartContainer, {
        width: chartContainer.clientWidth,
        height: chartContainer.clientHeight,
        layout: {
            backgroundColor: '#ffffff',
            textColor: '#000000',
        },
        grid: {
            vertLines: {
                color: '#e1e1e1',
            },
            horzLines: {
                color: '#e1e1e1',
            },
        },
        priceScale: {
            borderColor: '#cccccc',
        },
        timeScale: {
            borderColor: '#cccccc',
        },
    });

    const lineSeries = chart.addLineSeries({
        color: '#ff9900',
        lineWidth: 2,
    });

    // Mock data
    const data1D = [];
    const data1W = [];
    const data1M = [];

    // Initialize with 1D data
    lineSeries.setData(data1D);

    // Update chart data dynamically
    window.updateChart = (timeframe) => {
        if (timeframe === '1D') lineSeries.setData(data1D);
        if (timeframe === '1W') lineSeries.setData(data1W);
        if (timeframe === '1M') lineSeries.setData(data1M);

        // Highlight the active button
        document.querySelectorAll('#chart-controls button').forEach((btn) => btn.classList.remove('active'));
        document.getElementById(`btn-${timeframe}`).classList.add('active');

        // Update status bar
        statusText.innerText = `Chart updated to ${timeframe}`;
    };

    // Handle action buttons
    window.performAction = (action) => {
        alert(`${action} action performed!`);
        statusText.innerText = `${action} executed at ${new Date().toLocaleTimeString()}`;
    };

    // Resize chart dynamically
    window.addEventListener('resize', () => {
        chart.resize(document.getElementById('chart').offsetWidth, document.getElementById('chart').offsetHeight);
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const chartElement = document.getElementById('chart');

    // Create chart
    const chart = LightweightCharts.createChart(chartElement, {
        width: chartElement.clientWidth,
        height: chartElement.clientHeight,
        layout: {
            backgroundColor: '#ffffff',
            textColor: '#000',
        },
        grid: {
            vertLines: { color: '#e1e1e1' },
            horzLines: { color: '#e1e1e1' },
        },
    });

    // Add series
    const lineSeries = chart.addLineSeries({
        color: '#f39c12',
        lineWidth: 2,
    });

    // Set data
    lineSeries.setData([
        { time: '2023-01-01', value: 150 },
        { time: '2023-01-02', value: 152 },
        { time: '2023-01-03', value: 148 },
        { time: '2023-01-04', value: 155 },
        { time: '2023-01-05', value: 160 },
    ]);

    // Adjust chart on window resize
    window.addEventListener('resize', () => {
        chart.resize(document.getElementById('chart').offsetWidth, document.getElementById('chart').offsetHeight);
    });
    
});
