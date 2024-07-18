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
druidctl/0.0.1-alpha.1 linux-x64 node-v20.15.1
$ druidctl --help [COMMAND]
USAGE
  $ druidctl COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`druidctl api get ROUTE`](#druidctl-api-get-route)
- [`druidctl sql [SQL]`](#druidctl-sql-sql)
- [`druidctl supervisor list`](#druidctl-supervisor-list)

## `druidctl api get ROUTE`

Send a raw GET request to the Druid REST API

```
USAGE
  $ druidctl api get ROUTE --url <value> [--json] [-u <value>]

ARGUMENTS
  ROUTE  API route to request

GLOBAL FLAGS
  -u, --user=<value>  User to authenticate as using basic auth
      --json          Format output as json.
      --url=<value>   (required) Base URL of the Druid instance

DESCRIPTION
  Send a raw GET request to the Druid REST API

EXAMPLES
  $ druidctl api get /health
```

_See code: [src/commands/api/get.ts](https://github.com/Fryuni/druidctl/blob/v0.0.1-alpha.1/src/commands/api/get.ts)_

## `druidctl sql [SQL]`

Execute SQL

```
USAGE
  $ druidctl sql [SQL] --url <value> [--json] [-u <value>] [-f <value>]

ARGUMENTS
  SQL  SQL to execute

FLAGS
  -f, --file=<value>  read SQL from a file

GLOBAL FLAGS
  -u, --user=<value>  User to authenticate as using basic auth
      --json          Format output as json.
      --url=<value>   (required) Base URL of the Druid instance

DESCRIPTION
  Execute SQL

EXAMPLES
  $ druidctl sql
```

_See code: [src/commands/sql.ts](https://github.com/Fryuni/druidctl/blob/v0.0.1-alpha.1/src/commands/sql.ts)_

## `druidctl supervisor list`

list supervisors

```
USAGE
  $ druidctl supervisor list --url <value> [--json] [-u <value>]

GLOBAL FLAGS
  -u, --user=<value>  User to authenticate as using basic auth
      --json          Format output as json.
      --url=<value>   (required) Base URL of the Druid instance

DESCRIPTION
  list supervisors

EXAMPLES
  $ druidctl supervisor list
```

_See code: [src/commands/supervisor/list.ts](https://github.com/Fryuni/druidctl/blob/v0.0.1-alpha.1/src/commands/supervisor/list.ts)_

<!-- commandsstop -->
