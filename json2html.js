export default function json2html(data) {
    // Extract unique column names from the data
    const columns = [...new Set(data.flatMap(obj => Object.keys(obj)))];
    
    // Start building the HTML string for the table
    let html = '<table data-user="adnansmemail@gmail.com">';
    
    // Create the table headers
    html += '<thead><tr>' + columns.map(col => `<th>${col}</th>`).join('') + '</tr></thead>';
    
    // Create the table rows
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>' + columns.map(col => `<td>${row[col] || ''}</td>`).join('') + '</tr>';
    });
    html += '</tbody>';
    html += '</table>';
    
    return html;
}
