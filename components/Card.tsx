import React, { useRef, useState } from "react";
import { GameState } from "../states";
import { Players, Button } from "../components";
import { Player } from "../types";
import { observer } from "mobx-react-lite";
import CardFlip from "react-native-card-flip";
import Modal from "react-native-modal";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { IObservableArray, makeAutoObservable } from "mobx";
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  View,
  Animated,
  Easing,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

type props = {
  visible: boolean;
  callback: any;
};

export const Card: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const players = []; // list of players for doghouse dropdown
    GameState.players.forEach(player => players.push({label: player.name, value: player.name}))

    const [flipped, setFlipped] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);
    const [key, setKey] = useState(0);
    const [doghouse, setDoghouse] = useState({
      players: []
  })

    let card;
    let timer;
    
    if (GameState.decks[GameState.dice].useTimer) {
      timer = (
        <View style={styles.timerView}>
          <TouchableOpacity
            onPress={() => {
              if (!playing) setPlaying(true);
              if (playing && !timerFinished) {
                setKey(prevKey => prevKey + 1)
              }
            }}
            style={styles.timerView}
            activeOpacity={.75}>
            <CountdownCircleTimer
              key={key}
              isPlaying={playing}
              duration={10}
              size={150}
              strokeWidth={12}
              initialRemainingTime={10}
              colors={[
                ['#004777', 0.4],
                ['#F7B801', 0.4],
                ['#A30000', 0.2],
              ]}
              onComplete={() => {
                setTimerFinished(true);
              }}
            >
              {({ remainingTime }) => (
                <Text style={styles.cardText}>
                  {playing ? (remainingTime == 0 ? "Times Up!" : remainingTime ): "Start Timer"}
                </Text>
              )}
            </CountdownCircleTimer>
          </TouchableOpacity>
        </View>
      );
    }

    return (
        <Modal
          backdropOpacity={0.0}
          isVisible={props.visible}
          swipeDirection={flipped && doghouse.players.length > 0 ? ["left", "right", "down", "up"] : []}
          useNativeDriverForBackdrop
          propagateSwipe = {true}
          onSwipeComplete={() => {
            setFlipped(false);
            setPlaying(false);
            setTimerFinished(false);
            doghouse.players.forEach(player => GameState.adjustScore(player));
            setDoghouse({ players: [] });
            props.callback();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <CardFlip
                ref={(cardObj) => {
                  card = cardObj;
                }}
                style={styles.cardContainer}
              >
                <TouchableOpacity
                  onPress={() => {
                    card.flip();
                    setFlipped(true);
                  }}
                  style={styles.card}
                  activeOpacity={1}
                >
                  <Text style={styles.cardText}>
                    {GameState.decks[GameState.dice].name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.card} 
                  activeOpacity={1}
                  onPress={() => {
                    card.tip();
                  }}
                >
                  <View style={styles.cardInner}>
                    <Text style={styles.prompt}>
                      {GameState.decks[GameState.dice].prompt}
                    </Text>
                    <Text style={styles.cardText}>
                      {GameState.activeCard.text}
                    </Text>
                    {timer}
                      <DropDownPicker
                        items={players}

                        multiple={true}
                        multipleText={"%d player" + (doghouse.players.length == 1 ? "" : "s") + " in the doghouse"}
                        min={0}
                        max={GameState.decks[GameState.dice].maxDoghouse == -1 ? players.length : GameState.decks[GameState.dice].maxDoghouse}
                        disabled={!timerFinished && GameState.decks[GameState.dice].useTimer}
                        placeholder='Send someone to the doghouse'
                        defaultValue=''
                        containerStyle={styles.doghouseDropDown}
                        itemStyle={{
                          justifyContent: 'flex-start'
                        }}
                        placeholderStyle={{
                          fontFamily: "Tw-Bold",
                          fontSize: 20,
                        }}
                        labelStyle={{
                          fontFamily: "Tw-Bold",
                          fontSize: 20,
                        }}
                        onChangeItem={item => setDoghouse({
                          players: item // an array of the selected items
                        })}
                      />
                  </View>
                </TouchableOpacity>
              </CardFlip>
            </View>
          </View>
        </Modal>
    );
  }
);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(0,0,0,0.0)",
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  playAreaContainer: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  cardInner: {
    backgroundColor: "#fff",
    height: "90%",
    width: "90%",
    borderRadius: 9,
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    height: "100%",
    width: "100%",
    borderRadius: 9,
    position: "relative",
  },
  centeredView: {
    flex: 1,
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0.0)",
    borderRadius: 14,
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  timerView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  prompt: {
    textAlign: "center",
    fontFamily: "Tw-Reg",
    color: "#808080",
    fontSize: 22,
    margin: 0,
  },
  cardText: {
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
  doghouseDropDown: {
    height: 40,
  }
});
