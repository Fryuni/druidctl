# druidctl

A CLI for Apache Druid management.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/druidctl.svg)](https://npmjs.org/package/druidctl)
[![Downloads/week](https://img.shields.io/npm/dw/druidctl.svg)](https://npmjs.org/package/druidctl)

<!-- toc -->

- [druidctl](#druidctl)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g druidctl
$ druidctl COMMAND
running command...
$ druidctl (--version)
druidctl/0.0.0 darwin-x64 node-v20.15.0
$ druidctl --help [COMMAND]
USAGE
  $ druidctl COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`druidctl hello PERSON`](#druidctl-hello-person)
- [`druidctl hello world`](#druidctl-hello-world)
- [`druidctl help [COMMAND]`](#druidctl-help-command)
- [`druidctl plugins`](#druidctl-plugins)
- [`druidctl plugins add PLUGIN`](#druidctl-plugins-add-plugin)
- [`druidctl plugins:inspect PLUGIN...`](#druidctl-pluginsinspect-plugin)
- [`druidctl plugins install PLUGIN`](#druidctl-plugins-install-plugin)
- [`druidctl plugins link PATH`](#druidctl-plugins-link-path)
- [`druidctl plugins remove [PLUGIN]`](#druidctl-plugins-remove-plugin)
- [`druidctl plugins reset`](#druidctl-plugins-reset)
- [`druidctl plugins uninstall [PLUGIN]`](#druidctl-plugins-uninstall-plugin)
- [`druidctl plugins unlink [PLUGIN]`](#druidctl-plugins-unlink-plugin)
- [`druidctl plugins update`](#druidctl-plugins-update)

## `druidctl hello PERSON`

Say hello

```
USAGE
  $ druidctl hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ druidctl hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Fryuni/druidctl/blob/v0.0.0/src/commands/hello/index.ts)_

## `druidctl hello world`

Say hello world

```
USAGE
  $ druidctl hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ druidctl hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Fryuni/druidctl/blob/v0.0.0/src/commands/hello/world.ts)_

## `druidctl help [COMMAND]`

Display help for druidctl.

```
USAGE
  $ druidctl help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for druidctl.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.6/src/commands/help.ts)_

## `druidctl plugins`

List installed plugins.

```
USAGE
  $ druidctl plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ druidctl plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/index.ts)_

## `druidctl plugins add PLUGIN`

Installs a plugin into druidctl.

```
USAGE
  $ druidctl plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into druidctl.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DRUIDCTL_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DRUIDCTL_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ druidctl plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ druidctl plugins add myplugin

  Install a plugin from a github url.

    $ druidctl plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ druidctl plugins add someuser/someplugin
```

## `druidctl plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ druidctl plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ druidctl plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/inspect.ts)_

## `druidctl plugins install PLUGIN`

Installs a plugin into druidctl.

```
USAGE
  $ druidctl plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into druidctl.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DRUIDCTL_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DRUIDCTL_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ druidctl plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ druidctl plugins install myplugin

  Install a plugin from a github url.

    $ druidctl plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ druidctl plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/install.ts)_

## `druidctl plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ druidctl plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ druidctl plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/link.ts)_

## `druidctl plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ druidctl plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ druidctl plugins unlink
  $ druidctl plugins remove

EXAMPLES
  $ druidctl plugins remove myplugin
```

## `druidctl plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ druidctl plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/reset.ts)_

## `druidctl plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ druidctl plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ druidctl plugins unlink
  $ druidctl plugins remove

EXAMPLES
  $ druidctl plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/uninstall.ts)_

## `druidctl plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ druidctl plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ druidctl plugins unlink
  $ druidctl plugins remove

EXAMPLES
  $ druidctl plugins unlink myplugin
```

## `druidctl plugins update`

Update installed plugins.

```
USAGE
  $ druidctl plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.7/src/commands/plugins/update.ts)_

<!-- commandsstop -->
