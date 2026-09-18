//your JS code here. If required.
function removeColor(){
	const select = document.getElementById("colorSelect");
	const selectedOption = select.options(select.selectedIndex);
	select.removeChild(selectedOption);
}