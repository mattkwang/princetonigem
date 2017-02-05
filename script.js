function dropMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}

function showMemberInfo(name) {
	document.getElementById("overlay").classList.toggle("show");
    document.getElementById(name).classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn') && !event.target.matches('.member-hover')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}

		dropdowns = document.getElementsByClassName("member-cont");
		for (i = 0; i < dropdowns.length; i++) {
			var memberInfo = dropdowns[i];
			if (memberInfo.classList.contains('show')) {
				memberInfo.classList.remove('show');
			}
		}
	}
}