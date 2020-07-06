export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `You're in Luck!. This site has been updated! ` +
    `Please reload to get the Freshest and Defest site updates.`
  )

  if (answer === true) {
    window.location.reload()
  }
}