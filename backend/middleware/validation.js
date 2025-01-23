const createValidation = (req, res, next) => {
    try {
        const { header, description, price, numberOfRooms } = req.body;

        if (!header) return res.status(404).json({ error: "You must provide a header text" });
        if (!description) return res.status(404).json({ error: "You must provide a description text" });
        if (!price) return res.status(404).json({ error: "You must provide a price" });
        if (!numberOfRooms) return res.status(404).json({ error: "You must provide a number of rooms" });
        
        next();

    } catch (error) {
        console.log("Error in signup validation middleware", error.message);
        res.status(500).json({ error: "Internal server error" }); 
    }
}

module.exports = createValidation;