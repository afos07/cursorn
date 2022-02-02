import React, { useState } from 'react';
import {
    SafeAreaView, 
    View, 
    Text,
    StyleSheet,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';

const Props = (props)=>{

    const [ name, setName ] = useState('Anderson Filipe');
    const [exibirBox, setExibirBox] = useState(false);

    const handClick = ()=>{
        setExibirBox(!exibirBox);
    }

    return(
        <View style={styles.controlView}>
            <StatusBar backgroundColor={'#fbc531'} barStyle='default'/>
            <Text style={styles.textApp}>{props.frase}</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite algo para modificar o State'
                onChangeText={(value)=> setName(value)}
                placeholderTextColor="#b2bec3" 
            />
            
            {exibirBox && // isto é um if
                <View style={styles.quadrado}>
                    <Text>Nome informado:</Text>
                    <Text>{name}</Text>
                </View>
            }
            
            

            <TouchableOpacity style={styles.btn} onPress={()=> handClick()}>
                <Text style={styles.textApp}>Exibir nome</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    controlView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textApp:{
        fontSize:20,
        color:'#222',
        textTransform:'uppercase',
    },
    subTextApp:{
        fontSize:15,
        color:'green',
    },
    input:{
        backgroundColor:'#f0f0f0',
        width:350,
        color:'#222',
        marginVertical:10,
        borderRadius:10,
        padding:13
    },
    btn:{
        backgroundColor:'#fbc531',
        color:'#222222',
        padding:15,
        width:350,
        textAlign:'center',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    quadrado:{
        height:200,
        width:200,
        borderWidth:1,
        borderColor:'#f0f0f0',
        margin:10,
        borderRadius:5,
        color:'red',
        justifyContent:'center',
        alignItems:'center',
    }
})
export default Props;