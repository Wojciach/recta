export const moniuszki = () => {
    const photoContext1 = require.context("./photos/MassGalleries/Moniuszki/", false, /\.(png|jpe?g|svg)$/);
    const photoKeys1 = photoContext1.keys();
    const photoUrls1 = photoKeys1.map(photoContext1);
    return photoUrls1;
}

export const moniuszki40 = () => {
    const photoContext1 = require.context("./photos/MassGalleries/Moniuszki40/", false, /\.(png|jpe?g|svg)$/);
    const photoKeys1 = photoContext1.keys();
    const photoUrls1 = photoKeys1.map(photoContext1);
    return photoUrls1;
}

export const taczow = () => {
    const photoContext1 = require.context("./photos/MassGalleries/Taczow/", false, /\.(png|jpe?g|svg)$/);
    const photoKeys1 = photoContext1.keys();
    const photoUrls1 = photoKeys1.map(photoContext1);
    return photoUrls1;
}

export const taczow40 = () => {
    const photoContext1 = require.context("./photos/MassGalleries/Taczow40/", false, /\.(png|jpe?g|svg)$/);
    const photoKeys1 = photoContext1.keys();
    const photoUrls1 = photoKeys1.map(photoContext1);
    return photoUrls1;
}

export const fundamenty = () => {
    const photoContext1 = require.context("./photos/MassGalleries/Fundamenty/", false, /\.(png|jpe?g|svg)$/);
    const photoKeys1 = photoContext1.keys();
    const photoUrls1 = photoKeys1.map(photoContext1);
    return photoUrls1;
}

export const fundamenty40 = () => {
    const photoContext1 = require.context("./photos/MassGalleries/Fundamenty40/", false, /\.(png|jpe?g|svg)$/);
    const photoKeys1 = photoContext1.keys();
    const photoUrls1 = photoKeys1.map(photoContext1);
    return photoUrls1;
}

