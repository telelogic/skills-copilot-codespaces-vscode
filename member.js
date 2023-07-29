function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
    if (skillsMemberValue == "yes") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}