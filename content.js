// content.js


// Add a menu item to work on the last weeks missed puzzles - Puzzle Review
const streak_link = document.querySelector('#topnav a[href="/streak"]');
if (streak_link) {
    const groupDiv = streak_link.closest('div[role="group"]');
    if (groupDiv) {
        const newLink = document.createElement('a');
        newLink.href = '/training/dashboard/7/improvementAreas';
        newLink.textContent = 'Puzzle Review';
        groupDiv.insertBefore(newLink, streak_link);
    }
}


// Change the profile link to jump straight to the games tab
const profileNode = document.getElementById('dasher_app');
if (targetNode) {
    const observer = new MutationObserver((mutations) => {
        const userLink = profileNode.querySelector('a.user-link[href="/@/DrTomHere"]');
        if (userLink) {
            userLink.href = "/@/DrTomHere/all";
            // Optional: Stop observing if this is the only link you need to change
            // observer.disconnect(); 
        }
    });
    observer.observe(profileNode, {
        childList: true,  // watches for the new <div> and <a> tags
        subtree: true     // reaches deep into the nested structure you provided
    });
}


// Move game craetion to the left side
const lobbyNode = document.getElementById('lobby__start');
if (lobbyNode) {
    const streamsDiv = streak_link.closest('div[role="group"]');

}
