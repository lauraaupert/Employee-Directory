
import axios from "axios";

export default {
    search: () => axios.get("https://randomuser.me/api/?results=70")
}