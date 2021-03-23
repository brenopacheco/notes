# Environments
    
NODE_ENV :: popularized by express

- development
- staging
- production
- testing

# Packages

## dotenv

- reads .env files into process.env variable.
- does not override shell variables if set

+ .env                    :: loads by default
+ .env.local              :: overrides all except in test environment
+ .env.${NODE_ENV}        :: loads on specific environment
+ .env.${NODE_ENV}.local  :: overrides in specific environment

- source control should keep track of all except env.*local files

``` .env
    NODE_ENV     = development
    HOST         = localhost
    DB_HOST      = localhost
    DB_URL       = url
    DB_USER      = myuser
    DB_PASS      = mypassword
    BABEL_ENV    = development
    MOCK_API_URL = url
    API_KEY      = key
    REACT_APP_VERSION=${npm_package_version} # this var is expanded
    # this is a comment
```

in code: the code should not really care about the environment

``` config.js file
    require('dotenv').config();
    const DB_URL = process.env.DB_URL;
```
