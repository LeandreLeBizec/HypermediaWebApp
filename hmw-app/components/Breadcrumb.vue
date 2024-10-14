<template>
  <nav aria-label="breadcrumb">
    <ol class="flex space-x-2 mt-6">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <NuxtLink
            v-if="index !== breadcrumbs.length - 1"
            :to="crumb.path"
            class="text-dark-pink hover:text-rose-400 underline"
        >
          {{ crumb.name }}
        </NuxtLink>
        <span v-else class="text-dark-pink">{{ crumb.name }}</span>
        <span v-if="index !== breadcrumbs.length - 1" class="mx-2 text-dark-pink">></span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    replaceIdWith: {
      type: String,
      default: '',
    },
  },
  computed: {
    breadcrumbs() {
      const addSpaceBeforeCapitals = (str) => {
        return str.replace(/(?!^)([A-Z])/g, ' $1');
      };

      const pathArray = this.$route.path.split('/').filter((v) => v.length > 0);

      // Check if the last element is a number and replace it with the value of the replaceIdWith prop
      if (!isNaN(pathArray[pathArray.length - 1])) {
        pathArray[pathArray.length - 1] = this.replaceIdWith;
      }

      const breadcrumbs = pathArray.map((path, index) => {
        return {
          name: addSpaceBeforeCapitals(path.charAt(0).toUpperCase() + path.slice(1)),
          path: '/' + pathArray.slice(0, index + 1).join('/'),
        };
      });

      return [
        { name: 'Home', path: '/' },
        ...breadcrumbs,
      ];
    },
  },
};
</script>
