import Project from '../../common/entity/project';
import APIService from '../../common/APIService';

class SubmitHelper {
    static submitNewProject() {
        const newProject = new Project()
        APIService.createProject(newProject)
    }
}

export default SubmitHelper