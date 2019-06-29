function generatePdf() {
    // Get the element.
    var element = document.getElementById('cv');

    // Generate the PDF.
    html2pdf().from(element).set({
        margin: [-10,0,0,0],
        filename: 'DariuszSkowron-CV-ENG.pdf',
        html2canvas: {windowWidth: 10000, scale: 10 },
        // jsPDF: {orientation: 'p', unit: 'mm', format: [350, 250], compressPDF: true}
        jsPDF: {orientation: 'p', unit: 'mm', format: 'a4', compressPDF: true}
    }).save();
}