import Project from '../../common/entity/project';
import APIService from '../../common/APIService';
import wallet from '../../common/wallet/Wallet'

class UIHelper {
    static submitNewProject(formValues: any) {

        const project = new Project()
        project.admin_addressl = formValues['admin_addressl']
        project.admin_pubkeyl = formValues['admin_pubkeyl']
        project.budget = formValues['budget']
        project.contract = ''//contractAddress


        project.info = formValues['info']
        project.name = formValues['name']

        project.rate = formValues['rate']

        if (formValues['exchangeType'] == 'pool') {
            project.exchange_time = formValues['exchangePeriodType']
            project.reward_token_num = formValues['total_budget']
            project.reward_token_symbol = formValues['token_symbol']
            project.budget = formValues['pool_budget']
        }
        else if (formValues['exchangeType'] == 'fixed') {
            project.budget = formValues['total_budget']
            project.point_token_num = formValues['total_budget']
            project.point_token_symbol = formValues['token_symbol']
        }


        project.sender_name = formValues['sender_name']
        project.sender_url = formValues['sender_url']
        project.start_date = formValues['projectDateRange'][0].format('YYYY-MM-DD');
        project.end_date = formValues['projectDateRange'][1].format('YYYY-MM-DD');
        project.verifier_address = [formValues['verifier_address']]
        project.verifier_pubkey = [formValues['verifier_pubkey']]
        console.log('formValues', formValues, project)
        // wallet.init().then(result => {
        //     console.log("my.wallet", wallet);
        //     if (result) {
        //         var ss = wallet.getContractObj("AgentBuilder");
        //         console.log("===========" + JSON.stringify(ss));
        //         wallet.depoyContract(ss["abi"], ss["bytecode"], wallet.address).then((address) => {
        //             console.log("address" + address);
        //         })
        //     }
        // });
        // const newProject = new Project()
        // APIService.createProject(newProject)
    }
}

export default UIHelper