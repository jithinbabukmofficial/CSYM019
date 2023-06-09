const data = [
    {
        "country": "Afghanistan",
        "population": 37172386
    },
    {
        "country": "Albania",
        "population": 2866376
    },
    {
        "country": "Algeria",
        "population": 42228429
    },
    {
        "country": "American Samoa",
        "population": 55465
    },
    {
        "country": "Andorra",
        "population": 77006
    },
    {
        "country": "Angola",
        "population": 30809762
    },
    {
        "country": "Anguilla",
        "population": 15094
    },
    {
        "country": "Antarctica",
        "population": 1106
    },
    {
        "country": "Antigua and Barbuda",
        "population": 96286
    },
    {
        "country": "Argentina",
        "population": 44494502
    },
    {
        "country": "Armenia",
        "population": 2951776
    },
    {
        "country": "Aruba",
        "population": 105845
    },
    {
        "country": "Australia",
        "population": 24982688
    },
    {
        "country": "Austria",
        "population": 8840521
    },
    {
        "country": "Azerbaijan",
        "population": 9939800
    },
    {
        "country": "Bahamas",
        "population": 385640
    },
    {
        "country": "Bahrain",
        "population": 1569439
    },
    {
        "country": "Bangladesh",
        "population": 161356039
    },
    {
        "country": "Barbados",
        "population": 286641
    },
    {
        "country": "Belarus",
        "population": 9483499
    },
    {
        "country": "Belgium",
        "population": 11433256
    },
    {
        "country": "Belize",
        "population": 383071
    },
    {
        "country": "Benin",
        "population": 11485048
    },
    {
        "country": "Bermuda",
        "population": 63973
    },
    {
        "country": "Bhutan",
        "population": 754394
    },
    {
        "country": "Bolivia",
        "population": 11353142
    },
    {
        "country": "Bosnia and Herzegovina",
        "population": 3323929
    },
    {
        "country": "Botswana",
        "population": 2254126
    },
    {
        "country": "Bouvet Island",
        "population": 0
    },
    {
        "country": "Brazil",
        "population": 209469333
    },
    {
        "country": "British Indian Ocean Territory",
        "population": 0
    },
    {
        "country": "Brunei",
        "population": 428962
    },
    {
        "country": "Bulgaria",
        "population": 7025037
    },
    {
        "country": "Burkina Faso",
        "population": 19751535
    },
    {
        "country": "Burundi",
        "population": 11175378
    },
    {
        "country": "Cabo Verde",
        "population": 555987
    },
    {
        "country": "Cambodia",
        "population": 16249798
    },
    {
        "country": "Cameroon",
        "population": 25216237
    },
    {
        "country": "Canada",
        "population": 37057765
    },
    {
        "country": "Cape Verde",
        "population": 543767
    },
    {
        "country": "Cayman Islands",
        "population": 64174
    },
    {
        "country": "Central African Republic",
        "population": 4666377
    },
    {
        "country": "Chad",
        "population": 15477751
    },
    {
        "country": "Chile",
        "population": 18729160
    },
    {
        "country": "China",
        "population": 1392730000
    },
    {
        "country": "Christmas Island",
        "population": 1402
    },
    {
        "country": "Cocos (Keeling) Islands",
        "population": 596
    },
    {
        "country": "Colombia",
        "population": 49648685
    },
    {
        "country": "Comoros",
        "population": 832322
    },
    {
        "country": "Congo",
        "population": 5244363
    },
    {
        "country": "Cook Islands",
        "population": 17379
    },
    {
        "country": "Costa Rica",
        "population": 4999441
    },
    {
        "country": "Croatia",
        "population": 4087843
    },
    {
        "country": "Cuba",
        "population": 11338138
    },
    {
        "country": "Cyprus",
        "population": 1189265
    },
    {
        "country": "Czech Republic",
        "population": 10629928
    },
    {
        "country": "Denmark",
        "population": 5793636
    },
    {
        "country": "Djibouti",
        "population": 958920
    },
    {
        "country": "Dominica",
        "population": 71625
    },
    {
        "country": "Dominican Republic",
        "population": 10627165
    },
    {
        "country": "East Timor",
        "population": 1267972
    },
    {
        "country": "Ecuador",
        "population": 17084357
    },
    {
        "country": "Egypt",
        "population": 98423595
    },
    {
        "country": "El Salvador",
        "population": 6420744
    },
    {
        "country": "England",
        "population": 55619400
    },
    {
        "country": "India",
        "population": 1352617328
    },
]


function loaded() {
    const ctx = document.getElementById('myChart');


    const labels = data.map(item => item.country)
    const population = data.map(item => item.population)

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Population',
                data: population,
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
}

document.addEventListener('DOMContentLoaded', loaded)