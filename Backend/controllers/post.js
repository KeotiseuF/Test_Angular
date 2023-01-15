exports.getPosts = (req, res) => {
    res.json({ post : [
        {title: "First post"},
        {title: "Second post"},
    ]})
}