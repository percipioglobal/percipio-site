# Using percipioglobal/percipio-site

## Setting Up Local Dev

You'll need [Docker desktop](https://www.docker.com/products/docker-desktop) for your platform installed to run devMode in local development

Ensure no other local development environments are running that might have port conflicts, then:

* Rename the `example.env` file to `.env` in the `cms` directory
* Start up the site by typing `make dev` in terminal in the project's root directory (the first build will be somewhat lengthy)
* Navigate to `http://localhost:3500` to use the site; the `vite-dev-server` runs off of `http://localhost:3501`

Wait until you see the following to indicate that the PHP container is ready:

```
php_1         | Craft is installed.
php_1         | Applying changes from your project config files ... done
php_1         | [01-Dec-2020 18:38:46] NOTICE: fpm is running, pid 22
php_1         | [01-Dec-2020 18:38:46] NOTICE: ready to handle connections
```

...and the following to indicate that the Vite container is ready:
```
vite_1        |   vite v2.3.2 dev server running at:
vite_1        |
vite_1        |   > Local:    http://localhost:3501/
vite_1        |   > Network:  http://172.22.0.5:3501/
vite_1        |
vite_1        |   ready in 1573ms.
```

The CP login credentials are initially set as follows:

Login: `developer@percipio.london` \
Password: `j4!ZqrxH2rKZ-vwfH@XRG!jezzrdahFUFtsX!bHo6VQWomfU4i@efUpqJ2*N.TEvM4YJ2@WVCyBHWHPvNjDyPRykD@Fct.ad92A*`

**N.B.:** Without authorization & credentials (which are private), the `make pulldb` will not work (it just runs `scripts/docker_pull_db.sh`). It's provided here for instructional purposes.

## Makefile Project Commands

This project uses Docker to shrink-wrap the devops it needs to run around the project.

To make using it easier, we're using a Makefile and the built-in `make` utility to create local aliases. You can run the following from terminal in the project directory:

- `make dev` - starts up the local dev server listening on `http://localhost:8000/`
- `make build` - builds the static assets via the Vite buildchain
- `make clean` - removes the `cms/composer.lock` & the entire `cms/vendor/` directory as well as the `buildchain/package-lock.json` & the entire `buildchain/node_modules/` directory
- `make composer xxx` - runs the `composer` command passed in, e.g. `make composer install`
- `make craft xxx` - runs the `craft` [console command](https://craftcms.com/docs/3.x/console-commands.html) passed in, e.g. `make craft project-config/apply` in the php container
- `make npm xxx` - runs the `npm` command passed in, e.g. `make npm install`
- `make nuke` - restarts the project from scratch by running `make clean` (above), then shuts down the Docker containers, removes any mounted volumes (including the database), and then rebuilds the containers from scratch
- `make pulldb` - runs the `scripts/docker_pull_db.sh` script to pull a remote database into the database container; the `scripts/.env.sh` must be set up first
- `make restoredb xxx` - runs the `scripts/docker_restore_db.sh` script to restore a local database dump into the database container; the `scripts/.env.sh` must be set up first
- `make ssh` - opens up a Unix shell inside the PHP container for the project

**Tip:** If you try a command like `make craft project-config/apply --force` you’ll see an error, because the shell thinks the `--force` flag should be applied to the `make` command. To side-step this, use the `--` (double-dash) to disable further option processing, like this: `make -- craft project-config/apply --force`

**Tip:** To reach the CMS of the percipio site we changed the handle to `cp` so use `http://localhost:3500/cp`

**N.B.:** There are no images included in this repository, so if you go to `http:localhost:3500` you will see an error on the front-end because no images exist, if the backend works this means you have succesfully setup this project on your local machine!

**N.B.:** If you get a "Gateway Time-out 502" Error after the first `make dev` just stop the container from Docker Desktop, go to your terminal and run `make dev` once more. If this error happens it means that the php server simply started faster than the database was imported.