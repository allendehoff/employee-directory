import axios from "axios";

export default {
    loadUsers: function () {
        return axios.get(
            'https://randomuser.me/api/?results=200'
        )
        // $.ajax({
        //     url: 'https://randomuser.me/api/?results=200',
        //     dataType: 'json',
        //     success: function (data) {
        //         console.log(data);
        //     }
        // });
    }
}

// export default loadUsers