import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './pie_de_pagina_estilos';

export default function PieDePagina() {
    const [activeTab, setActiveTab] = useState('Exámenes'); // Estado para controlar el icono activo

    const tabs = [
        { name: 'Exámenes', icon: require('../../../assets/images/examenes.png') },
        { name: 'Escaneo', icon: require('../../../assets/images/escaneo.png') },
        { name: 'Reportes', icon: require('../../../assets/images/reportes.png') },
        { name: 'Sincronización', icon: require('../../../assets/images/sincronizacion.png') }
    ];

    return (
        <View style={styles.tabBar}>
            {tabs.map((item, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={[
                        styles.tabItem, 
                        activeTab === item.name && styles.tabItemActive // Aplica efecto de escala si está activo
                    ]} 
                    onPress={() => setActiveTab(item.name)}
                >
                    <Image 
                        source={item.icon} 
                        style={[
                            styles.icon, 
                            activeTab === item.name ? styles.iconActive : styles.iconInactive
                        ]}
                    />
                    <Text 
                        style={[
                            styles.labelStyle, 
                            activeTab === item.name ? styles.labelActive : styles.labelInactive
                        ]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

