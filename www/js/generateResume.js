function generatePdf(pp) {
    // Get the element.
    var element = document.getElementById('cv');


    // Generate the PDF.
    html2pdf().from(element).set({
        margin: [-10,0,-100,0],
        filename: 'Dariusz_Skowron_CV_' + pp + '.pdf',
        html2canvas: {windowWidth: 2000, scale: 2 },
        jsPDF: {orientation: 'p', unit: 'mm', format: 'a4', compressPDF: false}
    }).save();
}



