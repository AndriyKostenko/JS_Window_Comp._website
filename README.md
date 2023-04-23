# JS_Window_Comp._website

1. For testing you will need local web-server installed...i will recommend Apache2. Debian Linux version 8.x+ or Ubuntu Linux version Ubuntu 15.04+ or above: 
    # Start command #
    `sudo systemctl start apache2.service`
    # Stop command #
    `sudo systemctl stop apache2.service`
    # Restart command #
    `sudo systemctl restart apache2.service`
    # Status #
    `sudo systemctl status apache2.service`
and to setup local web-server into folder: /var/www/html/test.
Server will be started on http://127.0.0.1/test/ 

2. `gulp` to start the project
(If you have got such error: 'Error: error:0308010C:digital envelope routines::unsupported' - write into command line: 
    linux: `export NODE_OPTIONS=--openssl-legacy-provider`(linux users) 
    windows: `set NODE_OPTIONS=--openssl-legacy-provider`
in your command line...after checking the project write into command line `unset NODE_OPTIONS` to activate the security measures in your pc again)

