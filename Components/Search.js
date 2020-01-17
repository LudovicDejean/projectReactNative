import React from 'react'
import {View, Button, TextInput} from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style = {{ marginTop: 20}}>
                <TextInput placeholder="Titre de l'article"/>
                <Button title = "Rechercher" onPress={()=> {}}/>
            </View>
        )
    }
}
export default Search