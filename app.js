const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },

  methods: {
    addGoal() {
      this.goals.push({
        goal: this.enteredGoalValue,
        index: this.goals.length, // Use the length as the index
      });
      this.enteredGoalValue = ""; // Clear the input field after adding a goal
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
