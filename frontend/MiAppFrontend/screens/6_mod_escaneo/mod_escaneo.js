import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Encabezado from '../10_componentes/superior/encabezado';
import PieDePagina from '../10_componentes/inferior/pie_de_pagina';
import styles from './mod_escaneo_estilos';

export default function ModEscaneo() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.containerEncabezado}>
        <Encabezado />
      </View>

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.ordenar}>¿Cómo escanear?</Text>

        <ScrollView contentContainerStyle={styles.scrollContenido}>
          <Text style={styles.descripcion}>
            Por favor, escanee el documento físico asegurándose de alinear correctamente las marcas o señales
            presentes en el documento para garantizar la detección precisa de las respuestas.
          </Text>

          <Text style={styles.subtitulo}>Ejemplo:</Text>
          <View style={{ width: '100%', height: 200, backgroundColor: '#EEE', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#999' }}>[ Imagen de hoja escaneada aquí ]</Text>
          </View>
        </ScrollView>
      </View>

      {/* Botón flotante de cámara */}
      <TouchableOpacity style={styles.newExamButton}>
  <Image
    source={require('../../assets/images/fotografia.png')}
    style={styles.iconoCamara}
  />
</TouchableOpacity>

      {/* Pie de página */}
      <PieDePagina />
    </View>
  );
}
