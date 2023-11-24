setTimeout(function() {
  let fallbackUrl = "https://discord.com/invite/juTknfc7vr"
  window.location.href = process.env.DISCORD_INVITE_LINK ?? fallbackUrl;
}, 5000);
