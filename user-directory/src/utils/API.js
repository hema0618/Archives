import axios from "axios";
// Export an object containing methods

    
    export default {
        getEmployees: () => {
          return axios.get('https://randomuser.me/api/?results=1000');
        }
      };