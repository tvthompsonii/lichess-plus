// content.js


// Add a menu item to work on the last weeks missed puzzles - Puzzle Review
const streakLink = document.querySelector('#topnav a[href="/streak"]');
if (streakLink) {
    const groupDiv = streakLink.closest('div[role="group"]');
    if (groupDiv) {
        const newLink = document.createElement('a');
        newLink.href = '/training/dashboard/7/improvementAreas';
        newLink.textContent = 'Puzzle Review';
        groupDiv.insertBefore(newLink, streakLink);
    }
}


// Change the Study menu item to jump to personal studies
const studyLink = document.querySelector('#topnav a[href="/study"]');
if (studyLink) {
    studyLink.href = "/study/mine/hot";
}


// Change the profile link to jump straight to the games tab
const profileNode = document.getElementById('dasher_app');
if (profileNode) {
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


// Move game creation to the left side
const lobbyNode = document.getElementById('lobby__start');
if (lobbyNode) {
    const streamsDiv = streak_link.closest('div[role="group"]');

}
