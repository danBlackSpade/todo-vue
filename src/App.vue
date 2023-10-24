<template>

    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <TodoSpinner v-if="loading" />
            <div class v-else>
              <TodoFormAdd />
              <TodoItems v-if="$store.state.todos.length" />
              
              <TodoEmpty v-else />
            </div>
        </div>
    </div>
  



</template>

<script>
import TodoFormAdd from '@/components/TodoFormAdd'
import TodoItems from '@/components/TodoItems.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoEmpty from '@/components/TodoEmpty';
import { ref } from 'vue'
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    TodoFormAdd,
    TodoItems,
    TodoSpinner,
    TodoEmpty
  },

  setup() {
    const loading = ref(false)
    const store = useStore()

    loading.value = true
    store.dispatch('getTodos').finally(() => {
      loading.value = false
    })

    return {
      loading,
    }
  },


}
</script>

<style>

</style>
