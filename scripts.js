var liskTimestamp;
var unixTimestamp;
var _datetime;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function showliskbox()
{
    document.getElementById("timestamp").style.display = "block";
    document.getElementById("datetime").style.display = "none";
    document.getElementById("timestamplabel").innerHTML = "Lisk Timestamp:";
}

function showunixbox()
{
    document.getElementById("timestamp").style.display = "block";
    document.getElementById("datetime").style.display = "none";
    document.getElementById("timestamplabel").innerHTML = "Unix Timestamp:";
}

function showdatetime()
{
    document.getElementById("timestamp").style.display = "none";
    document.getElementById("datetime").style.display = "block";
    document.getElementById("timestamplabel").innerHTML = "Date Time:";
}

function convert() {
    if(document.getElementById("radlisk").checked) {
        liskTimestamp = Number(document.getElementById("timestamp").value);
        unixTimestamp = liskTimestamp + 1464109200;
        _datetime = new Date(unixTimestamp * 1000);
    }
    else if(document.getElementById("radunix").checked) {
        unixTimestamp = Number(document.getElementById("timestamp").value);
        liskTimestamp = unixTimestamp - 1464109200;
        _datetime = new Date(unixTimestamp * 1000);
    }
    else {
        _datetime = document.getElementById("datetime").value;
        unixTimestamp = Date.parse(_datetime)/1000; //_datetime.getUnixTime();
        liskTimestamp = unixTimestamp - 1464109200;
        _datetime = new Date(_datetime);
    }

    let minutes;
    if (_datetime.getMinutes() >= 10)
    {
        minutes = _datetime.getMinutes();
    }
    else
    {
        minutes = "0" + _datetime.getMinutes();
    }

    let seconds;
    if (_datetime.getSeconds() >= 10)
    {
        seconds = _datetime.getSeconds();
    }
    else
    {
        seconds = "0" + _datetime.getSeconds();
    }

    document.getElementById("data").innerHTML = "<label class='col-sm-3 col-form-label'>Lisk Timestamp:</label><label class='col-sm-4 col-form-label'>" + liskTimestamp + "</label><br />" +
    "<label class='col-sm-3 col-form-label'>Unix Timestamp:</label><label class='col-sm-4 col-form-label'>" + unixTimestamp + "</label><br />" +
    "<label class='col-sm-3 col-form-label'>Date Time:</label><label class='col-sm-3 col-form-label'>" + monthNames[_datetime.getMonth()] + " " + _datetime.getDate() + ", " + _datetime.getFullYear() + " " + formatAMPM(_datetime) + "</label><br />"
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let strTime = hours + ':' + minutes + '.' + seconds + ' ' + ampm;
    return strTime;
}
