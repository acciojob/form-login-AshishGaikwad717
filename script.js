function getFormvalue() {
    //Write your code here
	const form = document.querySelector("form1");
	const firstName = form.elements["fname"].value;
	const lastName = form.elements["lname"].value;
	alert(`${firstName} ${lastName}`);
}
