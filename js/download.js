// download.js
function downloadCV() {
	const link = document.createElement('a');
	link.href = 'pdf/Syed%20Ali%20Usman%20CV.pdf'; // Path to your CV
	//link.download = 'My_CV.pdf';
	link.setAttribute('download', 'My_CV.pdf'); // Force download
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
