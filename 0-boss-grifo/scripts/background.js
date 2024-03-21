// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//         text: "OFF",
//     });
// });

const grifo = "https://grifo.mpt.mp.br/grifo/frequencia/consultarFrequencia.action";

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuTitle === "Option 1") {
        // Code to handle click on "Option 1"
    } else if (info.menuTitle === "Option 2") {
        // Code to handle click on "Option 2"
    }
});

// chrome.action.onClicked.addListener(async (tab) => {
//     if (tab.url.startsWith(grifo)) {
//         // retrieve the action badge to check if it is ON or OFF
//         const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//         // next state will always be the opposite
//         const nextState = prevState === "ON" ? "OFF" : "ON";

//         // set the action badge to the next state
//         await chrome.action.setBadgeText({
//             tabId: tab.id,
//             text: nextState
//         });

//         if (nextState === "ON") {
//             // inject CSS
//             await chrome.scripting.insertCSS({
//                 files: ["styles/focus-mode.css"],
//                 target: { tabId: tab.id }
//             });
//         } else if (nextState === "OFF") {
//             // drop CSS
//             await chrome.scripting.removeCSS({
//                 files: ["styles/focus-mode.css"],
//                 target: { tabId: tab.id }
//             });
//         }
//     }
// });