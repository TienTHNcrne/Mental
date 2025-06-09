function sidebars(){
    const sidebar = document.getElementById('sidebar').classList.toggle("closed");
    const content = document.getElementById('ngon');
    if (sidebar){
        content.style.marginLeft = "10px";
    }
    else {
        content.style.marginLeft = "270px"
    }
}