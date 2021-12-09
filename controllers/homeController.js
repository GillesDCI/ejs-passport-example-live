
exports.home = async (req, res) => {

    console.log("the user is: ", req.user);
    console.log("the session is", req.session);

    return res.render('index.ejs');
 
}


exports.list =  async (req, res) => {
 
    var listItems = ['item1','item2', 'item3']
    return res.render('list.ejs', {listItems:listItems});
}