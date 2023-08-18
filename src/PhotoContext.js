export const bring = (gallery) => {

    const contextes = {
        moniuszki: require.context("./photos/MassGalleries/Moniuszki/", false, /\.(png|jpe?g|svg)$/),
        moniuszki40: require.context("./photos/MassGalleries/Moniuszki40/", false, /\.(png|jpe?g|svg)$/),
        taczow: require.context("./photos/MassGalleries/Taczow/", false, /\.(png|jpe?g|svg)$/),
        taczow40: require.context("./photos/MassGalleries/Taczow40/", false, /\.(png|jpe?g|svg)$/),
        fundamenty: require.context("./photos/MassGalleries/Fundamenty/", false, /\.(png|jpe?g|svg)$/),
        fundamenty40: require.context("./photos/MassGalleries/Fundamenty40/", false, /\.(png|jpe?g|svg)$/),
    }

    const photoContext = contextes[gallery];
    const photoKeys = photoContext.keys();
    const photoUrls = photoKeys.map(photoContext);
    return photoUrls;
}