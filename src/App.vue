<template>

    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <!-- <pre>
            {{ $store.state.todos }}
          </pre> -->

            <TodoSpinner v-if="loading" />
            <div class v-else>
              <TodoFormAdd />
              <TodoItems />
              <TodoEmpty />
            </div>
        </div>
    </div>
  



</template>

<script>
import TodoFormAdd from '@/components/TodoFormAdd'
import TodoItems from '@/components/TodoItems.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoEmpty from '@/components/TodoEmpty';

export default {
  name: 'App',
  components: {
    TodoFormAdd,
    TodoItems,
    TodoSpinner,
    TodoEmpty
  },
  data() {
    return {
      todos: [

      ],
      loading: false
    }
  },  
  created() {
    this.loading = true
    this.$store.dispatch('getTodos').then(() => {
      this.loading = false
    })
  }

}
</script>

<style>

</style>
