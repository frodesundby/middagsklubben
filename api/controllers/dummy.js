exports.getSumtn = () => (req, res, next) => {
    res.json({res: "got Sumtn"})
}

exports.registerSumtn = () => (req, res, next) => {
    res.json({res: "registered Sumtn"})
}

exports.putSumtn = () => (req, res, next) => {
    res.json({res: "updated Sumtn"})
}

exports.deleteSumtn = () => (req, res, next) => {
    res.json({res: "deleted Sumtn"})
}
