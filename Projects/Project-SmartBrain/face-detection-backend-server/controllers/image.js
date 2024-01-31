// Image Route Handler

const handleImage = (req, res, db) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json("Invalid Form Submission...!");
    }
    db('users').where({ id })   
        .returning('entries')
        .increment('entries', 1)
        .then(entries => {
            (entries.length) ? res.json(entries[0].entries)
                : res.status(400).json("Entry not found...!");
        })
        .catch(err => res.status(400).json("Error updating entries..."));
}

module.exports = {
    handleImage
}
