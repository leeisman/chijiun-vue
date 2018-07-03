import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const notesStore = new Vuex.Store({
    state: {
        notes: [],
        favouriteNotes: []
    },
    mutations: {
        FETCH(state, notes) {
            state.notes = notes;
        },
        FETCH_FAVOURITE(state, favouriteNotes) {
            state.favouriteNotes = favouriteNotes;
        }
    },
    actions: {
    }
});

export default notesStore;
