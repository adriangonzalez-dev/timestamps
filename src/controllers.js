const { request, response } = require("express");
const moment = require('moment')
moment.locale('es')

const getDates = (req=request,res=response) => {
    const {date} = req.params;
    let fecha;
    if(date.includes('-')){
        fecha = moment(date);
    } else {
        fecha = moment(+date)
    }

    if(!fecha.isValid()){
        return res.status(400).json({
            error:'Invalid Date'
        });
    }

    res.status(200).json({
        unix: fecha.format('x'),
        utc: fecha.format('dddd Do MMMM YYYY hh:mm:ss')
    })
    /* const fecha = moment.utc(+date).toString()
    res.json({
        fecha,
        seconds: fecha.valueOf()
    }) */
}

module.exports = {
    getDates,
}