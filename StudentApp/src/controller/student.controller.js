module.exports = {
    getStudentInfo: async (request, response) => {
        try {
            const id = request.params.id;
            console.log(id);
            
        } catch (error) {
            response.status(500).json({
                sucess: false,
                error: error.message
            });
        }
    }
}