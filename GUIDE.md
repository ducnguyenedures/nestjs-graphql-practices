# Guide

### Run API application

##### 1. Create a `.env` file

- Make `.env` file by copy from `.env.example`.

##### 2. Edit env config

- Edit file `.env` about information about database, redis connections
- You can run database and redis by [docker](#docker)

##### 3. Install dependencies:

```shell
npm i
```

or

```shell
yarn install
```

Note: depend on your tools remove `package-lock.json` or `yarn.lock` in `.gitignore` file

##### 4. Run:

```shell
npm run start:dev
```

Then access it at `http://localhost:8349/api/v1/`
or `http://localhost:[YOUR_PORT_IN_ENV_FILE]/api/v1/`

##### 5. Another command line:

- check eslint:

```shell
# check eslintrc
npm run lint
```

- format code:

```shell
# format ts code in src folder
npm run format
```

```shell
# format ts,md,js,json,html file in project (edit in package.json scripts format:all if need)
npm run format:all
```

### Docker

- Develop Docker File (User to create develop database and redis):
  [docker-compose.yaml](docker-compose.yaml)
- Docker command to create develop database and redis

```shell
docker-compose up -d
```

- Delete docker container

```shell
docker-compose down
```
