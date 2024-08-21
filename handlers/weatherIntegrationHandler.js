export const handleWeatherIntegration = async (req, res) => {
    console.log('In the callback handler')
    return res.status(200).send('Boa.')
}