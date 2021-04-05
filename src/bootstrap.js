import * as Font from 'expo-font'

export async function bootstap() {
    await Font.loadAsync( {
        'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
    
    })
}