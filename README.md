# bitwarden-dmenu

[![node](https://img.shields.io/node/v/bitwarden-dmenu.svg)](http://npmjs.com/package/bitwarden-dmenu)
[![GitHub](https://img.shields.io/github/license/andykais/bitwarden-dmenu.svg)](https://github.com/andykais/bitwarden-dmenu/blob/master/LICENSE)



dmenu for [bitwarden](https://bitwarden.com/) which can copy usernames, passwords, and various fields to your
clipboard.

## Usage
```
$ bitwarden-dmenu --help
Usage: bitwarden-dmenu [options]

Options:
  --clear-clipboard   Number of seconds to keep selected field in the clipboard.
                      Defaults to 15s.
  --session-timeout   Number of seconds after an unlock that the menu can be accessed
                      without providing a password again. Defaults to 0s.
  --sync-vault-after  Number of seconds allowable between last bitwarden sync and
                      current time. Defaults to 0s.
  --on-error          Arbitrary command to run if the program fails. The thrown error
                      is piped to the given command. Defaults to none.
```
By default, this program runs at its most secure. No session is stored for any time period, the vault is updated
every time it is used, and the clipboard is cleared every 15 seconds. In reality, you may want something a
little more lenient. Here is the command I use in my personal i3wm config.

```bash
bitwarden-dmenu --clear-clipboard 30 --session-timeout 100 --sync-vault-after 3600 --on-error 'xargs notify-send --urgency=low'
```

## Installation
```bash
# login with bitwarden-cli once before using bitwarden-dmenu
bw login
# install the cli
npm i -g bitwarden-dmenu
```

## Depends on
- [dmenu](https://tools.suckless.org/dmenu/)
- [bitwarden-cli](https://help.bitwarden.com/article/cli/)

## Credits

Inspired by the no longer maintained [keepass-dmenu](https://github.com/gustavnikolaj/keepass-dmenu)
