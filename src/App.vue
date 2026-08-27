<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HomeView from './views/HomeView.vue';

</script>

<template>
	<div class="g-container">
		<header>
			<nav>
				<router_link to="/home">
					Главная
				</router_link>
			</nav>
		</header>

		<RouterView />
	</div>


</template>

<style></style>
