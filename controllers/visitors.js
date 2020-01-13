module.exports = {
    index
}


function index(req, res) {
    Visitor.find({}, function(err, visitors) {
     res.render('visitors/index', {
      visitors,
      user: req.user
     });
  });
}
