import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
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
    const [nombreExamen, setNombreExamen] = useState('');
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
            <View style={styles.containerEncabezado}>
                <Encabezado />
            </View>

            <View style={styles.content}>
                <Text style={styles.ordenar}>Filtrar</Text>

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

            <DateTimePickerModal
                isVisible={showPicker}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setShowPicker(false)}
            />

            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.newExamButton}>
                <Text style={styles.newExamText}>NUEVO EXAMEN</Text>
            </TouchableOpacity>

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
                                        opcionA: '',
                                        opcionB: '',
                                        opcionC: '',
                                        opcionD: '',
                                        correcta: '', // A, B, C o D
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

            <Modal
                visible={showPreguntasForm}
                transparent
                animationType="slide"
                onRequestClose={() => setShowPreguntasForm(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView
                            contentContainerStyle={{ paddingBottom: 20, paddingRight: 16 }}
                            showsVerticalScrollIndicator={true}
                        >
                            <Text style={styles.modalTitle}>AGREGAR PREGUNTAS</Text>

                            {preguntasFormulario.map((pregunta, index) => (
                                <View key={index} style={styles.preguntaBlock}>
                                    <TextInput
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

                                    {['A', 'B', 'C', 'D'].map((opcion, idx) => (
                                        <View key={idx} style={styles.opcionRow}>
                                            <TextInput
                                                style={styles.opcionInput}
                                                placeholder={`Opción ${opcion}`}
                                                value={pregunta[`opcion${opcion}`] || ''}
                                                onChangeText={(text) => {
                                                    const updated = [...preguntasFormulario];
                                                    updated[index][`opcion${opcion}`] = text;
                                                    setPreguntasFormulario(updated);
                                                }}
                                                placeholderTextColor="#B1B1B1"
                                            />
                                            <TouchableOpacity
                                                style={[
                                                    styles.radioButton,
                                                    pregunta.correcta === opcion && styles.radioButtonSelected,
                                                ]}
                                                onPress={() => {
                                                    const updated = [...preguntasFormulario];
                                                    updated[index].correcta = opcion;
                                                    setPreguntasFormulario(updated);
                                                }}
                                            >
                                                <Text style={styles.radioText}>
                                                    {pregunta.correcta === opcion ? '✔' : ''}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
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
                                                nombre_examen: nombreExamen,
                                                materia,
                                                cantidad_preguntas: preguntasFormulario.length,
                                                creado_por: docente,
                                                colegio,
                                            };

                                            const preguntasData = preguntasFormulario.map(pregunta => ({
                                                pregunta: pregunta.texto,
                                                opcion_a: pregunta.opcionA,
                                                opcion_b: pregunta.opcionB,
                                                opcion_c: pregunta.opcionC,
                                                opcion_d: pregunta.opcionD,
                                                respuesta_correcta: pregunta.correcta,
                                            }));


                                            await fetch('http://localhost:5000/api/examen', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ examenData, preguntasData }),
                                                mode: 'cors'
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
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <PieDePagina />
        </View>
    );
};

export default Examenes;
