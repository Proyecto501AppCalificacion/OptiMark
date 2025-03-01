import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import styles from "./pantalla_de_carga_estilos";

const Loader = () => {
  const animacion = useRef(new Animated.Value(0)).current;
  const circleSize = 16; // 📌 Definir tamaño global

  useEffect(() => {
    Animated.loop(
      Animated.timing(animacion, {
        toValue: 1,
        duration: 1000, // Duración total del ciclo
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const circles = [
    { angle: 315 },
    { angle: 270 },
    { angle: 225 },
    { angle: 180 },
    { angle: 135 },
    { angle: 90 },
    { angle: 45 },
    { angle: 0 },
  ]; // 📌 Ángulos ordenados en sentido antihorario

  return (
    <View style={styles.loaderContainer}>
      {circles.map((circle, index) => {
        const translateX = Math.cos((circle.angle * Math.PI) / 180) * 28;
        const translateY = Math.sin((circle.angle * Math.PI) / 180) * 28;

        const opacity = animacion.interpolate({
          inputRange: [
            (circles.length - index - 1) / circles.length,
            (circles.length - index) / circles.length,
            1,
          ],
          outputRange: [1, 0.3, 1], // Oscurecimiento secuencial en reversa
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2,
                transform: [{ translateX }, { translateY }],
                opacity, // 🔥 Aplicar animación
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Loader;

















