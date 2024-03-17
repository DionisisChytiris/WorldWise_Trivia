import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
// import GuessTemplate from "./GuessTemplate";
// import FlagTemplate from "./FlagTemplate";

const QuizTemplate = (props) => {
  const navigation = useNavigation();
  const [score, setScore] = React.useState(0);
  const { colors } = useTheme();
  const data = props.dataQuiz;
  const [index, setIndex] = useState(0);
  const currentQuestion = data[index];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [show, setShow] = useState(null);
  const [img, setImg] = useState(styles.img);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [disabled, setDisabled] = useState(null);
  const [disabled1, setDisabled1] = useState(null);
  const [guesses, setGuesses] = useState(0);
  const [heart, setHeart] = useState(["❤️", "❤️", "❤️"]);
  const [apple, setApple] = useState(["🍎", "🍎", "🍎"]);
  const [hint, setHint] = useState(3);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion?.correctAnswerIndex) {
        setScore((score) => score + 10);
        setAnswerStatus(true);
        setDisabled(true);
      } else {
        setDisabled(true);
        setAnswerStatus(true);
        setShow(true);
        setImg(styles.img1);
        removeHeart();
      }
    } else {
      setDisabled(false);
      setAnswerStatus(null);
      setShow(null);
      setImg(styles.img);
    }
  }, [selectedAnswer]);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [index]);

  // Guess Quiz functions
  const letterSelectFunction = (ltr) => {
    if (!chosenLetters.includes(ltr)) {
      setChosenLetters([...chosenLetters, ltr]);

      if (currentQuestion.word.includes(ltr)) {
        setGuesses(guesses + 1);
      } else {
        removeApple();
      }
    }
  };

  const DisplayLettersFunction = () => {
    const letters = currentQuestion.letters;
    return Array.from(letters).map((letter, index) => (
      <Pressable
        key={index}
        disabled={chosenLetters.includes(letter)}
        onPress={() => {
          letterSelectFunction(letter);
        }}
        style={{
          backgroundColor: "white",
          width: 50,
          height: 45,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ margin: 1 }}>
          {chosenLetters.includes(letter) ? "" : letter}
        </Text>
      </Pressable>
    ));
  };

  useEffect(() => {
    if (guesses == currentQuestion.num) {
      setAnswerStatus(true);
      setScore(score + 10);
      setDisabled1(true);
      setShow(true);
    }
  }, [guesses]);

  const restartGuess = () => {
    setChosenLetters([]);
    setGuesses(0);
    setHint(3);
    setShow(null);
    setDisabled1(false);
  };

  const removeHeart = () => {
    const newArray = heart.length - 1;
    heart.pop(newArray);
    {
      newArray === 0 && navigation.navigate("LoseScreen");
    }
  };

  const removeApple = () => {
    const newApple = apple.length - 1;
    apple.pop(newApple);
    {
      newApple === 0 && removeHeart();
      newApple === -1 && (setIndex(index + 1), restartGuess());
      // newApple === 0 && navigation.navigate("LoseScreen");
    }
  };

  const hintFunction = () => {
    if (hint > 0) {
      const hiddenLetterIndex = currentQuestion.word
        .split("")
        .findIndex((letter) => !chosenLetters.includes(letter));
      setChosenLetters([
        ...chosenLetters,
        currentQuestion.word[hiddenLetterIndex],
      ]);
      setHint(hint - 1);
      setGuesses(guesses + 1);
    }
  };

  const restartApple = () => {
    const appleRestart = ["🍎", "🍎", "🍎"];
    return setApple(appleRestart);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      {/* Header */}
      <View style={{ flexDirection: "row", gap: 40 }}>
        <Text style={{ color: colors.text }}>
          {index + 1} / {data.length - 1}
        </Text>
        <Text style={{ color: colors.text, fontWeight: "500" }}>
          {props.quizName}
        </Text>
        <Text style={{ color: colors.text }}>score: {score}</Text>
        {/* {currentQuestion.status === "Guess" ? (
          <Text style={{}}>{apple}</Text>
        ) : (
          <Text style={{}}>{heart}</Text>
          )} */}
        <Text style={{}}>{heart}</Text>
      </View>

      {/* Quiz Template */}
      <View style={styles.quizContainer}>
        {/* Guess Quiz */}
        {currentQuestion.status === "Guess" && (
          <View>
            <View style={styles.guessContainer}>
              <View style={{ position: "absolute", top: 5, left: 15 }}>
                <Text>
                  <Text style={{}}>{apple}</Text>
                </Text>
              </View>
              <View style={{ position: "absolute", top: 5, right: 15 }}>
                <Text style={{color:colors.textDrawer}}>Hints: {hint}</Text>
              </View>
              <Text>{guesses}</Text>
              <View style={{ marginTop: 50 }}>
                <Image source={currentQuestion.img} style={styles.guessImg} />
              </View>
              <View
                style={
                  guesses === currentQuestion.num ? styles.guessWordBox : styles.guessWordBox1
                }
              >
                {Array.from(currentQuestion.word).map((letter, index) => (
                  <View key={index} style={styles.guessArrayView}>
                    <Text
                      style={
                        guesses === currentQuestion.num
                          ? { fontSize: 18, color: "white" }
                          : { fontSize: 18, color: "gray" }
                      }
                    >
                      {chosenLetters.includes(letter) ? (
                        letter
                      ) : (
                        <Text>__</Text>
                      )}
                    </Text>
                  </View>
                ))}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
              >
                {show ? null : (
                  <Pressable
                    style={{
                      backgroundColor: "blue",
                      borderRadius: 5,
                      width: 50,
                      height: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={hintFunction}
                    disabled={disabled1}
                  >
                    <Text style={{ color: "#f5f5f5" }}>Hint</Text>
                  </Pressable>
                )}
                <View style={styles.guessDisplay}>
                  <DisplayLettersFunction />
                </View>
              </View>
            </View>
          </View>
        )}

        {/* <GuessTemplate guessData={data} index={index}  /> */}

        {/* Flags Quiz */}
        {currentQuestion.status === "Flags" && (
          <>
            <Text style={[styles.capital, { color: colors.text }]}>
              {currentQuestion.capital}
            </Text>
            <Text style={[styles.country, { color: colors.text }]}>
              {currentQuestion.country}
            </Text>
            <View style={styles.box}>
              {currentQuestion?.options.map((item, index) => (
                <View style={styles.flagBox} key={index}>
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedAnswer(index);
                    }}
                    disabled={disabled}
                    style={
                      selectedAnswer === index &&
                      index === currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : selectedAnswer !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : selectedAnswer === index &&
                          index !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : styles.box2
                    }
                  >
                    <View>
                      <Image source={item.img} style={img} />
                    </View>
                    {/* Correct (Tick) Symbol */}
                    {selectedAnswer === index &&
                    index === currentQuestion.correctAnswerIndex ? (
                      <View style={styles.tick}>
                        <MaterialIcons name="done" size={30} color="white" />
                      </View>
                    ) : null}
                    {/* Wrong (clear) Symbol */}
                    {selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex ? (
                      <View style={styles.clear}>
                        <MaterialIcons name="clear" size={30} color="white" />
                      </View>
                    ) : null}
                    {show
                      ? index === currentQuestion.correctAnswerIndex && (
                          <View style={styles.tick}>
                            <MaterialIcons
                              name="done"
                              size={30}
                              color="white"
                            />
                          </View>
                        )
                      : null}
                  </Pressable>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Capital Quiz */}
        {currentQuestion.status === "Capitals" && (
          <>
            <Text style={[styles.capital, { color: colors.text }]}>
              {currentQuestion.country}
            </Text>
            {!currentQuestion.image ? (
              <Text style={[styles.country, { color: colors.text }]}>
                {currentQuestion.country}
              </Text>
            ) : (
              <View>
                <Image
                  source={currentQuestion.image}
                  style={{
                    width: 200,
                    height: 140,
                    borderRadius: 20,
                    marginTop: 80,
                  }}
                />
              </View>
            )}
            <View style={styles.boxCapitals}>
              {currentQuestion?.options.map((item, index) => (
                <View style={styles.flagBox1} key={index}>
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedAnswer(index);
                    }}
                    disabled={disabled}
                    style={
                      selectedAnswer === index &&
                      index === currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : selectedAnswer !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : selectedAnswer === index &&
                          index !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : styles.box2
                    }
                  >
                    {/* <View>
                      <Image source={item.img} style={img} />
                    </View> */}
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: colors.bgCapitalsCnt,
                        width: "100%",
                        height: "100%",
                        borderRadius: 10
                      }}
                    >
                      <Text style={{fontSize: 20, fontWeight: '500', color: colors.text}}>{item.capital}</Text>
                    </View>
                    {/* Correct (Tick) Symbol */}
                    {selectedAnswer === index &&
                    index === currentQuestion.correctAnswerIndex ? (
                      <View style={styles.tick}>
                        <MaterialIcons name="done" size={30} color="white" />
                      </View>
                    ) : null}
                    {/* Wrong (clear) Symbol */}
                    {selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex ? (
                      <View style={styles.clear}>
                        <MaterialIcons name="clear" size={30} color="white" />
                      </View>
                    ) : null}
                    {show
                      ? index === currentQuestion.correctAnswerIndex && (
                          <View style={styles.tick}>
                            <MaterialIcons
                              name="done"
                              size={30}
                              color="white"
                            />
                          </View>
                        )
                      : null}
                  </Pressable>
                </View>
              ))}
            </View>
          </>
        )}
      </View>

      {/* Arrow Right*/}
      {index + 1 > data.length - 2 ? (
        <Pressable
          style={{ position: "absolute", bottom: "55%", right: 10 }}
          onPress={() => {
            navigation.navigate(props.results, { score: score });
          }}
        >
          {answerStatus === null ? null : (
            <MaterialIcons
              name="keyboard-arrow-right"
              size={40}
              color={colors.text}
            />
          )}
        </Pressable>
      ) : (
        <Pressable
          style={{ position: "absolute", bottom: "55%", right: 10 }}
          onPress={() => {
            {
              selectedAnswer == null
                ? null
                : (setIndex(index + 1), restartApple(), setDisabled(false));
            }
            if (guesses == currentQuestion.num) {
              setIndex(index + 1);
              restartGuess();
            }
          }}
        >
          {answerStatus === null ? null : (
            <MaterialIcons
              name="keyboard-arrow-right"
              size={40}
              color={colors.text}
            />
          )}
        </Pressable>
      )}

      {/* Arrow Left*/}
      {index == 0 ? null : (
        <Pressable
          style={{ position: "absolute", bottom: "55%", left: 10 }}
          onPress={() => {
            {
              score === 0 ? null : setScore(score - 10);
            }
            setIndex(index - 1);
            restartGuess();
            restartApple();
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={40}
            color={colors.text}
          />
        </Pressable>
      )}
    </View>
  );
};

export default QuizTemplate;
