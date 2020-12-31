import React from "react";
import { Header } from "../../components";
import { StyleSheet, View } from "react-native";

export function Game({ navigation, title, help, players, children }: any) {
  let header;
  if (title) {
    header = <Header title={title} navigation={navigation} players={players} help={help} allowBack={players ? false : true}></Header>;
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 8,
    backgroundColor: "white",
    width: "95%",
    height: "91%",
  },
  container: {
    marginTop: 30,
    maxHeight: "91%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
