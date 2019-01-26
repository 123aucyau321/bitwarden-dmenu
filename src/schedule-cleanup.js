const fs = require('fs')
const bwRun = require('./exec-bitwarden-cli')
const clipboardy = require('clipboardy')

const timeout = n => new Promise(resolve => setTimeout(resolve, n))

/*
 * timeouts in seconds
 *
 */

module.exports = ({ lockBitwardenAfter, clearClipboardAfter, sessionFile, stdout }) => {
  console.debug('begin cleanup')
  return Promise.all([
    timeout(lockBitwardenAfter * 1000).then(() => {
      try {
        fs.unlinkSync(sessionFile)
        console.debug(`${sessionFile} removed.`)
      } catch (e) {
        if (e.code !== 'ENOENT') throw e
        console.debug(`${sessionFile} already removed.`)
      }
      bwRun('lock')
      // don't output to stdout if it is being used for reading information
      if(!stdout) {
        console.info('bitwarden is locked.')
      }
    }),
    timeout(clearClipboardAfter * 1000).then(() => {
      clipboardy.writeSync('')
      if(!stdout) {
        console.info('clipboard is cleared.')
      }
    })
  ])
}
