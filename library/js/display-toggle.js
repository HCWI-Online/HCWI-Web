// Display Toggle.
if (document.getElementById) {
	document.writeln('<style type="text/css"><!--')
	document.writeln('.texter {display:none} @media print {.texter {display:block;}}')
	document.writeln('//--></style>')
}

function openClose(theID) {
	if (document.getElementById(theID).style.display == "block") {
		document.getElementById(theID).style.display = "none"
	}
	else { document.getElementById(theID).style.display = "block" }
}