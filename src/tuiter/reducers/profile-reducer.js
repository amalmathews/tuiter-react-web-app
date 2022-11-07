import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    firstName: "Sensia",
    lastName: "Naruto",
    handle: "@jpnnaruto",
    profilePicture: "https://i.blogs.es/04b04a/maxresdefault-50/840_560.jpeg",
    bannerPicture: "https://alfabetajuega.com/hero/2021/06/uzumaki-naruto.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    bio: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow).One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.",
    website: "https://naruto.fandom.com/",
    location: "big city, Japan",
    dateOfBirth: "29th March 1994",
    dateJoined: "August 2021",
    numberOfTweets: "3457",
    followingCount: "456",
    followersCount: "10.9k"
}


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;