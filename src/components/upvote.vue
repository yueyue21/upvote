<template>
  <div class="bg-secondary" style="height: 100vh">
    <div class="container w-50">
      <div class="p-3">
        <div class="my-container bg-white px-3 py-3">
          <h2 class="text-center">Have fun</h2>
          <div class="d-flex flex-column">
            <div
              class="mt-3 vote-section d-flex justify-content-between"
              v-for="(item, index) in upvoteList"
              :key="index"
            >
              <div
                class="border border-secondary d-flex justify-content-start each-row"
                style="flex-basis: 90%; overflow: auto"
              >
                <div
                  v-for="innerItem in item"
                  :key="innerItem.id"
                  class="general-upvote"
                  :class="{
                    selected: activeList[index],
                    nonSelected: !activeList[index],
                  }"
                  @click="changeToRow(index)"
                >
                  <!-- {{ activeList[index] }} -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div class="general-button" @click="addUpvoteOn(index)">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="current"
                  style="stroke-width: 6px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z"
                    fill="#343A40"
                  />
                </svg>
              </div>
            </div>
            <div class="mt-3 vote-section d-flex justify-content-between">
              <div class="each-row" style="flex-basis: 90%">
                <div @click="clearAll" class="clear-style">Clear All</div>
              </div>
              <div class="new-row" @click="newVote">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    activeList() {
      return this.$store.getters.activeList;
    },
    upvoteList() {
      return this.$store.getters.upvoteList;
    },
  },
  methods: {
    clearAll() {
      this.$store.commit("clearAll");
    },
    changeToRow(index) {
      this.$store.commit("setAsActive", index);
    },
    addUpvoteOn(index) {
      // console.log("vote on", index);
      this.$store.commit("voteOn", index);
      this.$store.commit("setAsActive", index);
    },
    newVote() {
      this.$store.commit("newVote");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<style scoped>
.each-row {
  border-radius: 10px;
}
.my-container {
  border-radius: 5px;
}
.selected {
  background-color: #e5e8fd;
  color: #253cf2;
}
.nonSelected {
  background-color: #f4f6f8;
  color: #343a40;
}
.general-upvote {
  border-radius: 10px;
  /* background-color: #f3f6f8;
  color: #343a3f; */
  /* border: 1px solid red; */
  padding: 5px;
  margin: 5px;
}
.general-upvote:hover {
  cursor: pointer;
  /* background-color: #e5e8fd;
  color: #253bf2; */
}
.clear-style {
  border-radius: 10px;
  background-color: #f3f6f8;
  border: 1px solid green;
  color: #343a3f;
  text-align: center;
  /* border: 1px solid red; */
  padding: 5px;
  margin: 5px;
}
.clear-style:hover {
  color: white;
  background-color: green;
  cursor: pointer;
}
.new-row {
  border-radius: 10px;
  background-color: #f3f6f8;
  border: 1px solid green;
  color: #343a3f;
  text-align: center;
  /* border: 1px solid red; */
  padding: 5px;
  margin: 5px;
}
.new-row:hover {
  color: white;
  background-color: green;
  cursor: pointer;
}

.general-button {
  border-radius: 10px;
  background-color: #f3f6f8;
  color: #343a3f;
  /* border: 1px solid red; */
  padding: 5px;
  margin: 5px;
}
.general-button:hover {
  cursor: pointer;
  background-color: #e5e8fd;
  color: #253bf2;
}
.vote-section {
  margin: 16px 0 0 0;
}
</style>
