setTimeout(function() {
  let fallbackUrl = "https://discord.gg/wYQwBwkBGg"
  window.location.href = process.env.DISCORD_INVITE_LINK ?? fallbackUrl;
}, 5000);
