import BaseService from './BaseService';

class CampaignService extends BaseService {
    constructor() {
        super();
    }

    get Url() { return super.Url + "/campaigns"; }

    GetCampaigns() {
        return this.SendRequest(BaseService.GET);
    }

    GetCampaign(campaignId) {
        return this.SendRequest(BaseService.GET, campaignId);
    }

    UpdateCampaign(campaign) {
        return this.SendRequest(BaseService.PUT, campaign);
    }

    CreateCampaign(campaign) {
        return this.SendRequest(BaseService.POST, campaign);
    }

    DeleteCampaign(campaignId) {
        return this.SendRequest(BaseService.DELETE, campaignId);
    }
}

let service = new CampaignService();
export default service;
