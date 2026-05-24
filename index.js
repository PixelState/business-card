const emailBtn = document.getElementById("emailBtn");
const discordBtn = document.getElementById("discordBtn");
const copyMsg = document.getElementById("copyMsg");

function showCopyMsg(message) {
    copyMsg.textContent = message;
    copyMsg.classList.add("show");
    setTimeout(() => {
        copyMsg.classList.remove("show");
    }, 2000);
}
emailBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = "alx5387@gmail.com";
    try {
        await navigator.clipboard.writeText(email);
        showCopyMsg("Email copied!");
    } catch {
        showCopyMsg("Could not copy email");
    }
    window.location.href = `mailto:${email}`;
});
discordBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const discordTag = "alx5387";
    try {
        await navigator.clipboard.writeText(discordTag);
        showCopyMsg("Discord tag copied!");
    } catch {
        showCopyMsg("Could not copy Discord tag");
    }
     window.location.href = "discord://";
});
