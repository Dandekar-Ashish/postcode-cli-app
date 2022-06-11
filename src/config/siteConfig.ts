import config from './config.json'

export class SiteConfig{
    public static PostCodeAPIUrl :string
}

export const ConfigureSite = async()=>{

    const json = config;

    SiteConfig.PostCodeAPIUrl =json.PostCode.PostCodeAPIUrl;

}

ConfigureSite();