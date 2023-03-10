const options = {
    debounceTime: 1000,
    dateFormat: 'DD.MM.YYYY',
    dateTimeFormat: 'DD.MM.YYYY HH:mm',
};

const config = {
    production: {
        API_URL: 'http://192.168.1.26:24/api/users/',
        options,
    },
    staging: {
        API_URL: 'https://dev-api.tastesonway.com/api/v2/',
        options,
    },
    local: {
        API_URL: 'http://localhost/taste-on-way-api/public/api/users/',
        options,
    },
};

export const allConfig = config;

const environmentConfig = 'production';

export default config[environmentConfig] ?? config.production;
