import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './mod_examenes_estilos';
import Encabezado from '../10_componentes/superior/encabezado';
import PieDePagina from '../10_componentes/inferior/pie_de_pagina';

const Examenes = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [examName, setExamName] = useState('');
    const [subject, setSubject] = useState('');
    const [questions, setQuestions] = useState('');
    const [teacher, setTeacher] = useState('');
    const [school, setSchool] = useState('');

    const handleConfirm = (selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleSubjectChange = (text) => {
        // Convierte a formato Nombre Propio
        const formattedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setSubject(formattedText);
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

                {/* Sección de búsqueda y fecha */}
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

            {/* DateTimePickerModal */}
            <DateTimePickerModal
                isVisible={showPicker}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setShowPicker(false)}
            />

            {/* Botón para agregar nuevo examen */}
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.newExamButton}>
                <Text style={styles.newExamText}>NUEVO EXAMEN</Text>
            </TouchableOpacity>

            {/* Modal para agregar nuevo examen */}
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
                            value={examName}
                            onChangeText={setExamName}
                            placeholderTextColor="#B1B1B1"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Asignatura"
                            value={subject}
                            onChangeText={handleSubjectChange}
                            placeholderTextColor="#B1B1B1"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Cantidad de preguntas (Máx. 15)"
                            value={questions}
                            onChangeText={setQuestions}
                            keyboardType="numeric"
                            placeholderTextColor="#B1B1B1"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Docente"
                            value={teacher}
                            onChangeText={setTeacher}
                            placeholderTextColor="#B1B1B1"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Colegio o Instituto"
                            value={school}
                            onChangeText={setSchool}
                            placeholderTextColor="#B1B1B1"
                        />

                        <View style={styles.modalButtons}>
                        <TouchableOpacity
                            onPress={() => {
                                // Cerrar el modal inmediatamente
                                setModalVisible(false);

                                // Limpiar los campos con un pequeño retraso
                                setTimeout(() => {
                                    setExamName('');
                                    setSubject('');
                                    setQuestions('');
                                    setTeacher('');
                                    setSchool('');
                                }, 1000); // 1000 ms = 1 segundo
                            }}
                            style={styles.cancelButton}
                        >
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>


                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Guardar</Text>
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