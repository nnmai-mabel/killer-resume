interface AppConfig {
    apiUrl: string;
    appName: string;
}

const getEnvironmentConfig = (): AppConfig => {
    switch (import.meta.env.MODE) {
        case 'production':
            return {
                apiUrl: 'https://killer-resume-api-two.vercel.app/',
                appName: 'Killer Resume - Production',
            }
        default:
            return {
                apiUrl: 'http://localhost:3000',
                appName: 'Killer Resume - Development',
            }
    }
}

const config = getEnvironmentConfig();

export default config;