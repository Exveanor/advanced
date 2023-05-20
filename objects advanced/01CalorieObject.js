function calorieObject (array) {
    const result = {};

    for (let i = 0; i < array.length; i+=2) {
        const element = array[i];

        result[array[i]] = Number([array[i+1]]);
        
    }
    return result;
}
calorieObject (['Yoghurt', '48', 'Rise', '138','Apple', '52']);

//{ Yoghurt: 48, Rise: 138, Apple: 52 }