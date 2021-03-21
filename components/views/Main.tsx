import React from "react";
import { Header } from "../../components";
import { StyleSheet, View } from "react-native";

export function Main({ navigation, title, help, players, children }: any) {
  let header;
  if (title) {
    header = (
      <Header
        title={title}
        navigation={navigation}
        players={players}
        help={help}
        allowBack={players ? false : true}
      ></Header>
    );
  } else {
    header = <></>;
  }

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        {header}
        <View style={styles.container}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.0)",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 8,
    backgroundColor: "#fff",
    width: "95%",
    height: "91%",
    maxWidth: 450,
    maxHeight: 900,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.0,
    elevation: 8,
  },
  container: {
    marginTop: 30,
    maxHeight: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
