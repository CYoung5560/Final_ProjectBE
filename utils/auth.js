const checkIsInRole = (...roles) => (request, response, next) => {
    if (!request.user) {
        return response.status(400).send();
    }

    const hasRole = roles.find(role => request.user.role === role);
    if (!hasRole) {
        console.log('Does not have role');
        return response.status(400).send();
    }
    return next();
};

module.exports = { checkIsInRole };