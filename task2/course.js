// load function this will run as soon as the page loads
const url = "http://192.168.0.24:5000/api/course"
async function loaded() {
    try {
        // fething data from json file
        const data = await axios.get(`${url}`).then(res => res.data).then(res => res.data)
        console.log({ data });
        const body = document.getElementById('tablebody');
        // referencing to the table element using id 
        let tabledata = ""
        // creating a new variable called tabledata

        // maping through the array and adding each row to the variable we created above
        data.map(item => {
            tabledata += `<tr>
                <td>
                <label class="checkbox-wrap checkbox-primary">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                </td>
                <td class="d-flex align-items-center">
                <div class="pl-3 email">
                    <span>${item.title}</span>
                </div>
                </td>
                <td>${item.overview}</td>
                <td class="status"><span class="active">${item.highlights}</span></td>
                <td class="status"><span class="active">${item.created}</span></td>
                <td>
    <button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
  </td>
            </tr>`
        })

        // apending the data to the table element
        if (tabledata != undefined) body.innerHTML += tabledata

        console.log({ data })
    } catch (error) {
        console.log(error);
    }
}


// document loaded funtion
document.addEventListener('DOMContentLoaded', loaded)