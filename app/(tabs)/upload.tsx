import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>We need your permission to use the camera</Text>
        <Button title="Grant permission" onPress={requestPermission} />
      </View>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      console.log("Photo taken:", photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.center}>
          <Text>Photo saved at:</Text>
          <Text>{photoUri}</Text>
          <Button title="Take another" onPress={() => setPhotoUri(null)} />
        </View>
      ) : (
        <>
          <CameraView ref={cameraRef} style={styles.camera} />
          <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
            <Text style={styles.captureText}>📸</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  captureButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 20,
  },
  captureText: {
    fontSize: 24,
  },
});
