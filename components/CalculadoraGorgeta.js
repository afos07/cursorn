import React, {useState, useEffect} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';
const CalculadoraGorgeta = ()=>{
    const [conta, setConta] = useState('');
    const [gorgeta, setGorgeta] = useState(0);

    const calc = ()=>{
        let nConta = parseFloat(conta);
    
        if(nConta > 0){
            // vamos realizar o calculo
            setGorgeta((conta * 10) / 100);
        }else{
            setGorgeta(0);
        }
    }   

    useEffect(()=>{
        calc();
    }, [gorgeta, conta]); 
    return (
        <View>
            <StatusBar backgroundColor={'#ffffff'} barStyle='dark-content'/>
            <View style={styles.navbar}>
                <Text style={styles.titleNavbar}>Calculadora de gorgeta</Text>
            </View>

            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Quanto deu a conta?'
                    keyboardType='numeric'
                    placeh
                    olderTextColor={'#ddd'}
                    value={conta}
                    onChangeText={(e)=> setConta(e)}

                />
            </View>
            <View>
                <TouchableOpacity style={styles.btnPrimary}
                    onPress={()=> calc()}
                >
                    <Text style={styles.textBtn}>Calcular gorgeta</Text>
                </TouchableOpacity>
            </View>

            {gorgeta > 0 && 
            <View style={styles.areaInfo}>
                <View style={styles.areaInfoItem}>
                    <Text style={styles.txtInfo}>Valor da conta:</Text> 
                    <Text style={styles.subTxtInfo}>R$ {conta}</Text>
                </View>

                <View style={styles.areaInfoItem}>
                    <Text style={styles.txtInfo}>Valor da gorgeta:</Text> 
                    <Text style={styles.subTxtInfo}>R$ {gorgeta}</Text>
                </View> 

                <View style={styles.areaInfoItem}>
                    <Text style={styles.txtInfo}>Valor da total:</Text> 
                    <Text style={styles.subTxtInfo}>R$ {parseFloat(conta) + gorgeta}</Text>
                </View>             
            </View>
            }

            <View style={styles.footerApp}>
                <Text style={styles.footerAppText}>Desenvolvido por afos</Text>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    navbar:{
        height:70,
        backgroundColor:'#fff',
        top:0,
        justifyContent:'center',
        alignItems:'center'
    },
    titleNavbar:{
        fontSize:15,
        fontWeight:'800',
        color:'#a1a1a1',
        // textTransform:'uppercase',
        fontFamily:'Roboto'
    },
    textInput:{
        backgroundColor:'#f0f0f0',
        margin:10,
        borderRadius:8,
        padding:10,
        fontWeight:'600',
        color:'#222'
    },
    btnPrimary:{
        borderRadius:8,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        backgroundColor:'#f0f0f0'
    },
    textBtn:{
        color:'#2980b9',
        fontWeight:'700',
        textTransform:'uppercase'
    },
    txtInfo:{
        color:'#222',
        fontWeight:'700'
    },
    areaInfo:{
        backgroundColor:'#f0f0f0',
        padding:30,
    },
    areaInfoItem:{
        marginBottom:10,
        alignItems:'flex-end'
    },
    subTxtInfo:{
        fontWeight:'900',
        fontSize:20,
        color:'#341f97',
        fontFamily:'Roboto',
    },
    footerApp:{
        marginTop:10,
        textAlign:'center',
        padding:10,
        backgroundColor:'#f0f0f0'
    },  
    footerAppText:{
        fontFamily:'monospace',
        fontWeight:'100',
        textAlign:'center',
        color:'#a1a1a1',
        fontSize:10
    }
});
export default CalculadoraGorgeta;