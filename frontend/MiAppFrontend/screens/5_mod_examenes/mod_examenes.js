import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './mod_examenes_estilos';
import Encabezado from '../10_componentes/superior/encabezado';
import PieDePagina from '../10_componentes/inferior/pie_de_pagina';

const Examenes = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [search, setSearch] = useState('');

    const handleConfirm = (selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <View style={styles.containerEncabezado}>
                <Encabezado />
            </View>

            {/* Contenido principal */}
            <View style={styles.content}>
                <Text style={styles.ordenar}>Ordenar</Text>

                {/* Sección de búsqueda y fecha */}
                <View style={styles.searchSection}>
                    {/* Botón para abrir DatePicker */}
                    <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.datePickerContainer}>
                        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>

                    {/* Input de búsqueda */}
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar"
                        value={search}
                        onChangeText={setSearch}
                        placeholderTextColor="#B1B1B1"
                    />
                </View>
            </View>

            {/* DateTimePickerModal */}
            <DateTimePickerModal
                isVisible={showPicker}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setShowPicker(false)}
            />

            {/* Botón para agregar nuevo examen */}
            <TouchableOpacity style={styles.newExamButton}>
                <Text style={styles.newExamText}>NUEVO EXAMEN</Text>
            </TouchableOpacity>

            {/* Pie de página */}
            <PieDePagina />
        </View>
    );
};

export default Examenes;







