import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  String [URL] = "";

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Code Scanné de type ${type} à l'adresse ${data} a été scanné!`);
    URL = data;
    
  };

  if (hasPermission === null) {
    return <Text>En attente d'autorisation</Text>;
  }
  if (hasPermission === false) {
    return <Text>Pas d'acces à la caméra</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      

      {scanned && <Button title={'Tapper pour Scaner de nouveau'} onPress={() => setScanned(false)} />}
      {scanned && <Button title={'Lien du Code Scanné'} onPress={ ()=>{ Linking.openURL(URL)} }/>}
    </View>
  );
}