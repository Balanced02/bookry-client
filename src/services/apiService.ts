import axios from 'axios';
import { useApiCall } from 'utils/useApiCall';

const { callApi } = useApiCall();

class ApiService {
  signup(dataObj) {
    return callApi('signup');
  }
}

export default new ApiService();
