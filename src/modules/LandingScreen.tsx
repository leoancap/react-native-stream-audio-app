import { observer } from "mobx-react-lite";
import { Container } from "native-base";
import * as React from "react";
import { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { Video } from "../stores/LandingScreen";
import { RootStoreContext } from "../stores/RootStore";
import { Header } from "../ui/Header";
import { PlayerFooter } from "../ui/PlayerFooter";
import { SongCard } from "../ui/SongCard";
import { ui } from "../utils/UI";

interface Props {}

export const ListingScreen: React.FC<Props> = observer(() => {
  const { listingStore } = React.useContext(RootStoreContext);

  useEffect(() => {
    return () => {};
  }, []);

  const container =
    listingStore.loading === "undone" ? (
      <Container style={[ui.bg2]}>
        <Text>Search for something</Text>
      </Container>
    ) : listingStore.loading === "pending" ? (
      <Container style={[ui.bg2]}>
        <Text>Loading ....</Text>
      </Container>
    ) : listingStore.loading === "error" ? (
      <Container style={[ui.bg2]}>
        <Text>{listingStore.errorMsg}</Text>
      </Container>
    ) : (
      listingStore.youtubeVideos.map((v: Video, i: number) => (
        <SongCard
          onVideoPress={() => {
            listingStore.fetchAudioUrl(v.videoId);
          }}
          key={v.videoId + v.title + i}
          title={v.title.substring(0, 60)}
          duration={v.duration}
          videoId={v.videoId}
          isFabOpen={i === 1}
        />
      ))
    );

  return (
    <Container style={[ui.bg2]}>
      <Header />
      <ScrollView>{container}</ScrollView>
      <PlayerFooter />
    </Container>
  );
});