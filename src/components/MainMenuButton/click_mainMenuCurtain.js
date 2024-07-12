



// C:\Users\user\Desktop\projects\wftd_dbmi\src\components\MainMenuButton\clickMenuCurtain.js


export function clickMenuCurtain(onRemoveComplete) {
    const mainMenu = document.getElementById('MainMenu');
    const mainMenuCurtain = document.getElementById('mainMenuCurtain');

    // Set the initial state of the element to trigger the transition
    mainMenu.style.transition = 'left 0.5s'; // Adjust the duration as needed
    mainMenu.style.left = '-330px';

    // Listen for the transitionend event
    mainMenu.addEventListener('transitionend', () => {
        // Once the transition is complete, remove the elements
        mainMenu.remove();
        mainMenuCurtain.remove();
        onRemoveComplete && onRemoveComplete(); // Call the callback if provided
    });
}