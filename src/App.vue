<script setup lang="ts">
import { RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import ReloadPrompt from "@/components/ReloadPrompt.vue";
import { ref, type Ref } from "vue";

const rail: Ref<boolean> = ref(false);

const theme: Ref<"dark" | "light"> = ref("dark");

function toggleTheme(): void {
  if (theme.value === "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
}

function toggleRail() {
  rail.value = !rail.value;
}
</script>

<template>
  <v-app :theme="theme" full-height class="align-stretch">
    <v-navigation-drawer :rail="rail" permanent elevation="0">
      <v-list
        nav
        height="64"
        max-height="64"
        density="comfortable"
        class="overflow-hidden border-b py-3"
      >
        <v-list-item min-width="255">
          <template #prepend>
            <v-avatar>
              <img height="30" src="@/assets/logo.svg" />
            </v-avatar>
          </template>
          <template v-if="!rail" #default>
            <div
              class="text-button text-no-wrap font-weight-bold pl-1 no-select"
            >
              Vue 3 App
            </div>
          </template>
        </v-list-item>
      </v-list>
      <v-list nav density="compact" class="overflow-x-hidden">
        <v-list-item v-if="rail">
          <v-btn to="/" block variant="text" width="36">
            <v-icon icon="mdi-home-outline"></v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item v-else>
          <v-btn to="/" block variant="text" class="justify-start">
            <v-icon left icon="mdi-home-outline"></v-icon>
            Home
          </v-btn>
        </v-list-item>
        <v-list-item v-if="rail">
          <v-btn to="/about" block variant="text" width="36">
            <v-icon icon="mdi-information-outline"></v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item v-else>
          <v-btn to="/about" block variant="text" class="justify-start">
            <v-icon left icon="mdi-information-outline"></v-icon>
            About
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar height="64" elevation="0" class="border-b">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="toggleRail"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title tag="hamburger">Starting With Vue3</v-app-bar-title>
      <template #append>
        <v-btn text icon @click.stop="toggleTheme">
          <v-icon v-if="theme === 'light'" icon="mdi-white-balance-sunny" />
          <v-icon v-else icon="mdi-weather-night" />
        </v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                <h1>This is Title</h1>
              </v-card-title>
              <v-card-text>
                <img
                  alt="Vue logo"
                  class="logo"
                  src="@/assets/logo.svg"
                  width="125"
                  height="125"
                />
                <HelloWorld msg="You did it!" />
                <RouterView />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <ReloadPrompt />
    </v-main>
  </v-app>
</template>

<style>
@import "@/assets/base.css";

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
