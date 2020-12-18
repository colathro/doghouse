import React, { useState } from "react";
import { Help } from "../components";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type props = {
  title: string;
  navigation: any;
  help?: string;
};

export const Header: React.FC<props> = (props: props): JSX.Element => {
  let help;
  if (props.help) {
    const [modalVisible, setModalVisible] = useState(false);
    help = (
      <>
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.helpButtonText}>?</Text>
        </TouchableOpacity>
        <Help
          visible={modalVisible}
          callback={setModalVisible}
          help={props.help!}
        />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.navigation.goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      {help}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  title: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 35,
    width: 70,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
  },
  buttonText: {
    color: "#ff6700",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 24,
  },
  helpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  helpButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 28,
  },
});
