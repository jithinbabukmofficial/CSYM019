
async function loaded() {
    try {
        const course = await axios.get(`${url}`).then(res => res.data).then(res => res.data)
        const total = document.getElementById('myChart');
        total.className = "mb-3"

        let alldata = []
        let alllabels = []


        course.map((item, index) => {



            // creating pie chart html for each course
            var element = `<div class="row">
                                <div class="col-md-7 center">
                                    <h1>${item.title}</h1>
                                    <p>${item.overview}</p>
                                </div>
                                <div class="col-md-5">
                                    <canvas id='canvas${index}'>
                                    </canvas>
                                </div>
                            </div>
                            <hr class="mt-2 mb-3"/>`


            // geting the parent element by id and inserting the above html content with dynamic id 
            document.getElementById('charts').insertAdjacentHTML("afterend", element);
            var can_id = "canvas" + index;
            // geting the canvas with dynamic id
            var ctx = document.getElementById(can_id)
            const modules = JSON.parse(item.modules)
            console.log(item.modules)
            console.log(modules)

            // // creating labels and dataset with course  modules
            const labels = modules.map(item => item.name)
            const credits = modules.map(item => item.credits)

            // console.log({ credits });


            alllabels.push(item.title)
            alldata.push({
                label: item.title,
                data: credits,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            })

            // assigning the pie chart to the created element
            window.can_id = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of credits',
                        data: credits,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })


        new Chart(total, {
            type: "bar",
            data: {
                labels: alllabels,
                datasets: course.map(function (item, index) {
                    const modules = JSON.parse(item.modules)
                    return {
                        label: item.title,
                        data: modules.map(item => item.credits),
                        backgroundColor: "rgba(54, 162, 235, 0.5)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1
                    };
                })
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: false
                    },
                    y: {
                        stacked: false,
                        beginAtZero: true
                    }
                }
            }
        });



    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', loaded)