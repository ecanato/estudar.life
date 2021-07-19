var urlEspecifica = window.location.pathname == "https://estudar.life/login/index.php";

if (urlEspecifica) {
  document.getElementsByClassName("inner_page_breadcrumb").style.display = "none";
  document.getElementsByClassName("bgc-fa").style.backgroundImage = "url('https://estudar.life/pluginfile.php/1/theme_edumy/heading_bg/1625883883/header-bkg-01.jpg')";
}