import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './mod_examenes_estilos';
import Encabezado from '../10_componentes/superior/encabezado';
import PieDePagina from '../10_componentes/inferior/pie_de_pagina';

const Examenes = () => {
    const [preguntasFormulario, setPreguntasFormulario] = useState([]);
    const [showPreguntasForm, setShowPreguntasForm] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [nombreExamen, setNombreExamen] = useState(''); // Cambié el nombre de examName a nombreExamen
    const [materia, setMateria] = useState('');
    const [cantidadPreguntas, setCantidadPreguntas] = useState('');
    const [docente, setDocente] = useState('');
    const [colegio, setColegio] = useState('');

    const handleConfirm = (selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleMateriaChange = (text) => {
        const formattedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setMateria(formattedText);
    };

    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <View style={styles.containerEncabezado}>
                <Encabezado />
            </View>

            {/* Contenido principal */}
            <View style={styles.content}>
                <Text style={styles.ordenar}>Filtrar</Text>

                {/* Búsqueda y fecha */}
                <View style={styles.searchSection}>
                    <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.datePickerContainer}>
                        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar"
                        value={search}
                        onChangeText={setSearch}
                        placeholderTextColor="#B1B1B1"
                    />
                </View>
            </View>

            {/* Picker de fecha */}
            <DateTimePickerModal
                isVisible={showPicker}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setShowPicker(false)}
            />

            {/* Botón nuevo examen */}
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.newExamButton}>
                <Text style={styles.newExamText}>NUEVO EXAMEN</Text>
            </TouchableOpacity>

            {/* Modal nuevo examen */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Nuevo Examen</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del examen"
                            value={nombreExamen}
                            onChangeText={setNombreExamen}
                            placeholderTextColor="#B1B1B1"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Asignatura"
                            value={materia}
                            onChangeText={handleMateriaChange}
                            placeholderTextColor="#B1B1B1"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cantidad de preguntas (Máx. 15)"
                            value={cantidadPreguntas}
                            onChangeText={setCantidadPreguntas}
                            keyboardType="numeric"
                            placeholderTextColor="#B1B1B1"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Docente"
                            value={docente}
                            onChangeText={setDocente}
                            placeholderTextColor="#B1B1B1"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Colegio o Instituto"
                            value={colegio}
                            onChangeText={setColegio}
                            placeholderTextColor="#B1B1B1"
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                    setTimeout(() => {
                                        setNombreExamen('');
                                        setMateria('');
                                        setCantidadPreguntas('');
                                        setDocente('');
                                        setColegio('');
                                    }, 1000);
                                }}
                                style={styles.cancelButton}
                            >
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    const cantidad = parseInt(cantidadPreguntas);
                                    if (isNaN(cantidad) || cantidad <= 0 || cantidad > 15) {
                                        alert('Por favor ingresa una cantidad válida entre 1 y 15.');
                                        return;
                                    }

                                    const nuevasPreguntas = Array.from({ length: cantidad }, (_, i) => ({
                                        id: i + 1,
                                        texto: '',
                                    }));

                                    setPreguntasFormulario(nuevasPreguntas);
                                    setModalVisible(false);
                                    setTimeout(() => setShowPreguntasForm(true), 300);
                                }}
                                style={styles.saveButton}
                            >
                                <Text style={styles.saveButtonText}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal preguntas */}
            <Modal
                visible={showPreguntasForm}
                transparent
                animationType="slide"
                onRequestClose={() => setShowPreguntasForm(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>AGREGAR PREGUNTAS</Text>

                        {preguntasFormulario.map((pregunta, index) => (
                            <TextInput
                                key={index}
                                style={styles.input}
                                placeholder={`Pregunta ${index + 1}`}
                                value={pregunta.texto}
                                onChangeText={(text) => {
                                    const updated = [...preguntasFormulario];
                                    updated[index].texto = text;
                                    setPreguntasFormulario(updated);
                                }}
                                placeholderTextColor="#B1B1B1"
                            />
                        ))}

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                onPress={() => setShowPreguntasForm(false)}
                                style={styles.cancelButton}
                            >
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={async () => {
                                    try {
                                        const examenData = {
                                            nombre_examen: nombreExamen, // Cambié el nombre del campo a nombre_examen
                                            materia,
                                            cantidad_preguntas: preguntasFormulario.length,
                                            creado_por: docente, // Suponiendo que 'docente' es el identificador del creador
                                            colegio,
                                        };

                                        // Enviar datos al backend
                                        await fetch('http://localhost:5000/api/examen', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify(examenData),
                                        });

                                        setShowPreguntasForm(false);
                                        setNombreExamen('');
                                        setMateria('');
                                        setCantidadPreguntas('');
                                        setDocente('');
                                        setColegio('');
                                        setPreguntasFormulario([]);
                                        alert('Examen guardado correctamente');
                                    } catch (error) {
                                        console.error(error);
                                        alert('Error al guardar el examen');
                                    }
                                }}
                                style={styles.saveButton}
                            >
                                <Text style={styles.saveButtonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Pie de página */}
            <PieDePagina />
        </View>
    );
};

export default Examenes;

