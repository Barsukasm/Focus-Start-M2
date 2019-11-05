var menu = document.getElementsByClassName("c-navbar__item")[0];



switchMenu = function (event) {
	var menuObj = document.getElementsByClassName("menu")[0].classList;
	if (menuObj.contains("menu_hidden")) {
		menuObj.remove("menu_hidden")
	} else{
		menuObj.add("menu_hidden")
	}
}

menu.addEventListener("click", switchMenu);