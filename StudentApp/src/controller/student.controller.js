module.exports = {
    getStudentInfo: async (request, response) => {
        try {
            const id = request.params.id;
            console.log(id);
            //call biz func here
            response.status(400).json({
                sucess: true
            })
        } catch (error) {
            response.status(500).json({
                sucess: false,
                error: error.message
            });
        }
    }
}