#!/bin/sh
# jslint utility2:true

shMain () {(set -e
# this function will run the main program
    printf "running command 'npm run $*' ...\n" 1>&2
    ARG1="$1"
    # run command - custom
    case "$1" in
    esac
    # run command - default
    case "$ARG1" in
    build-ci)
        if [ "$npm_package_nameLib" = utility2 ]
        then
            ./lib.utility2.sh shReadmeTest build_ci.sh
            return
        fi
        utility2 shReadmeTest build_ci.sh
        ;;
    eval)
        shift
        "$@"
        ;;
    heroku-postbuild)
        if [ "$npm_package_nameLib" = utility2 ]
        then
            ./lib.utility2.sh shDeployHeroku
            return
        fi
        npm install kaizhu256/node-utility2#alpha --prefix .
        utility2 shDeployHeroku
        ;;
    start)
        export PORT=${PORT:-8080}
        if [ -f assets.app.js ]
        then
            node assets.app.js
        else
            if [ "$npm_package_nameLib" = utility2 ]
            then
                export npm_config_mode_auto_restart=1
                ./lib.utility2.sh shRun shIstanbulCover test.js
                return
            fi
            utility2 start test.js
        fi
        ;;
    test)
        if [ "$npm_package_nameLib" = utility2 ]
        then
            export PORT="$(
                node -e 'console.log((Math.random() * 0x10000) | 0x8000);'
            )"
            export npm_config_mode_auto_restart=1
            ./lib.utility2.sh test test.js
            return
        fi
        export PORT="$(
            node -e 'console.log((Math.random() * 0x10000) | 0x8000);'
        )"
        utility2 test test.js
        ;;
    utility2)
        shift
        if [ "$npm_package_nameLib" = utility2 ]
        then
            ./lib.utility2.sh "$@"
            return
        fi
        utility2 "$@"
        ;;
    esac
    printf "... finished running command 'npm run $*'\n" 1>&2
)}

# run command
shMain "$npm_lifecycle_event" "$(node -e 'console.log(
    JSON.parse(process.env.npm_config_argv).original.join(" ").replace((
        /^(?:run )?\S+ /
    ), "")
)')"
