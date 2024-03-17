import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      add: {
        width: 30,
        height: 30,
        backgroundColor: "yellow",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
      },
      remove: {
        width: 30,
        height: 30,
        backgroundColor: "yellow",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
      },
      goHome: {
        width: 80,
        height: 30,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "magenta",
      },
      quizContainer: {
        width: "100%",
        height: "95%",
        marginTop: 10,
        alignItems: "center",
      },
      capital: {
        fontSize: 12,
        position: "absolute",
        top: 20,
        right: 30,
      },
      country: {
        fontSize: 40,
        fontWeight: "500",
        marginTop: 100,
      },
      box: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        height: "50%",
        flexWrap: "wrap",
        alignContent: "center",
        gap: 20,
        justifyContent: "center",
      },
      boxCapitals: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        height: "50%",
        flexWrap: "wrap",
        alignContent: "center",
        gap: 10,
        justifyContent: "center",
      },
      flagBox: {
        width: "40%",
        height: "40%",
        borderRadius: 20,
        opacity: 1,
      },
      flagBox1: {
        width: "40%",
        height: "40%",
        borderRadius: 20,
        opacity: 1,
      },
      box1:{
        opacity: 1,
      },
      box2:{
        opacity: 0.5,
      },
      img: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        opacity: 1
      },
      img1: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        opacity: 0.5
      },
      shadow: {
        elevation: 15,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        borderRadius: 10
      },
      tick: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: 'white'
      },
      clear: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: 'white'
      },
      guessContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      guessImg: {
        width: 230,
        height: 150,
        borderRadius: 20
      },
      guessWordBox: {
        flexDirection: "row",
        marginTop: 60,
        backgroundColor: "green",
        borderRadius: 20,
        paddingHorizontal: 15,
      },
      guessWordBox1: {
        flexDirection: "row",
        marginTop: 60,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 15,
      },
      guessArrayView:{
        paddingHorizontal: 6,
        paddingVertical: 10,
        alignItems: "center",
      },
      guessDisplay: {
        flexDirection: "row",
        width: "80%",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }
})