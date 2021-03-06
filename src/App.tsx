import React from "react"
import { StyleSheet, View } from "react-native"
import { Router } from "./Routes"

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Router />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#f5cc3f",
    width: "100%",
    maxWidth: 425,
  },
})
