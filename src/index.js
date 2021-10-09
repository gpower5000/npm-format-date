/**
 * @param Helper for type Date
 */

 function formatDate(date, format = 'dd/mm/yyyy hh:ii:ss') {

    const _month = date.getMonth()+1;
    const _day   = date.getDate();
    const _hours = date.getHours();
    const _min   = date.getMinutes();
    const _sec   = date.getSeconds();

    const parseDate = (d) => (d>9 ? '' : '0')+d;

    const obj = {
        year  : date.getFullYear(),
        month : parseDate(_month),
        day   : parseDate(_day),
        hours : parseDate(_hours),
        min   : parseDate(_min),
        sec   : parseDate(_sec)
    }

    const parts = format.split(' ');

    return parts.map( p => {
        // p.split(/(-|\/)/)
        let _test = /(-|\/|:)/;
        if (_test.test(p)) {
            return p.split(_test).map( item => {
                switch (item) {
                    case 'dd':   return obj.day
                    case 'mm':   return obj.month
                    case 'yy':   return (obj.year+'').substring(2,4)
                    case 'yyyy': return (obj.year+'')
                    case 'hh':   return (obj.hours+'')
                    case 'ii':   return (obj.min+'')
                    case 'ss':   return (obj.sec+'')
                    default:
                        return item
                }
            }).join('')
        } return ''
    }).join(' ')
}

module.exports = {
    formatDate
}
