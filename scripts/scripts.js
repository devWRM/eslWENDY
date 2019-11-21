var storyTabs;
var storyPages;

window.onload = function () {
    storyTabs=document.getElementById("tabs").getElementsByTagName("li");
    storyPages=document.getElementById("stories").getElementsByTagName("div");
    
   tellStory(storyTabs[0]);
    
    for (var i=0; i< storyTabs.length; i++) {
        
        storyTabs[i].onclick = function() {
            tellStory(this);
            return false;
        }  
        storyTabs[i].onfocus = function() {
            tellStory(this);
            return false;
        }
    }
       
}

function tellStory (storyToTell) {
    for (var i = 0; i < storyTabs.length; i++) {
        
        if (storyTabs[i] == storyToTell) {
            storyTabs[i].classList.add ("active");
            storyPages[i].style.display = "block";
        } else {
            storyTabs[i].classList.remove ("active");
            storyPages[i].style.display = "none";
        }
    }
    
    
}



