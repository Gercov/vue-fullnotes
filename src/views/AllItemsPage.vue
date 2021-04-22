<template>
  <div>
    <div v-if="AllItems.length">
      <div class="title is-size-4-mobile is-2">Все ваши листы:</div>
      <components
        v-for="item in AllItems"
        :is="item.component"
        :key="item.id"
        :header="item.header"
        :main="item.main"
        :date="item.date"
        :id="item.id"
      >
      </components>
    </div>
    <div v-else>
      <div class="content is-medium">
        <h1>У вас пока нет заметок:(</h1>
        <p>
          Попробуйте создать свою первую
          <router-link :to="{ name: 'notes' }">заметку</router-link> или
          <router-link :to="{ name: 'todos' }">задачу</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import NoteItem from "@/components/NoteItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "AllItems",
  components: {
    TodoItem,
    NoteItem,
  },
  computed: {
    ...mapGetters({
      AllItems: "allItems"
    }),
  },
};
</script>
