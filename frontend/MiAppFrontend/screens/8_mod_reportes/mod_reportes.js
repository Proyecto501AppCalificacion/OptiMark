import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Encabezado from '../10_componentes/superior/encabezado';
import PieDePagina from '../10_componentes/inferior/pie_de_pagina';
import styles from './mod_reportes_estilos';

export default function Modreportes() {
  return (
    <View style={styles.container}>
      
      {/* Encabezado */}
      <View style={styles.containerEncabezado}>
        <Encabezado />
      </View>

      {/* Contenido principal */}
      <ScrollView style={styles.body}>

        {/* Título principal y descripción */}
        <View style={styles.section}>
          <Text style={styles.titulo}>Módulo de reportes</Text>
          <Text style={styles.descripcion}>Genera y visualiza informes personalizados para análisis y toma de decisiones</Text>
        </View>

        {/* Gráfico de líneas */}
        <View style={styles.section}>
          <View style={styles.subtituloContenedor}>
            <Text style={styles.subtitulo}>Nota promedio por examen</Text>
          </View>
          <Image
            source={require('../../assets/images/grafico_linea.png')}
            style={styles.imagenGrafico}
            resizeMode="contain"
          />
        </View>

        {/* Participación de materias */}
        <View style={styles.subtituloContenedor}>
          <Text style={styles.subtitulo}>Participación de materias</Text>
        </View>

        <View style={styles.sectionFila}>
          <View style={styles.leftColumn}>
            <Image
              source={require('../../assets/images/grafico_circular.png')}
              style={styles.imagenPie}
              resizeMode="contain"
            />
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.cajaTitulo}>EXÁMENES ESCANEADOS</Text>
            <Text style={styles.numeroGrande}>13</Text>
          </View>
        </View>

      </ScrollView>

      {/* Pie de página */}
      <PieDePagina />
    </View>
  );
}
