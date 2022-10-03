import axios from "axios";
const instance=axios.create({
    baseURL:'https://react-burger-builder-d15b8-default-rtdb.asia-southeast1.firebasedatabase.app/'
});
export default instance;