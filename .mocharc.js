module.exports = {
    require:"@babel/register",
    spec: 'specs/**/*.spec.js',
    file: 'config/setup.js',
    ignore:'specs/**/auth.spec.js'
}
