const db = {
    user: process.env.ATLAS_DB_USER,
    pass: process.env.ATLAS_DB_PASS,
    name: process.env.ATLAS_DB_NAME,
};
module.exports = {
    AtlasConString: `mongodb+srv://${db.user}:${db.pass}@fernandotestcluster-pmr8q.mongodb.net/${db.name}?retryWrites=true`,
}