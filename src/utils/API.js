import axios from "axios";

export default {
    loadUsers: function () {
        return axios.get(
            'https://randomuser.me/api/?results=200&nat=US&inc=name,phone,email,picture,dob'
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