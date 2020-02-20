/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Hello 👋🏽. This site has been updated. ` +
    `Reload to display the freshest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}