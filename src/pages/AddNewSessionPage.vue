<template>
  <div class="container p-8 bg-white rounded mx-auto mt-4 max-w-md shadow">
    <h1 class="text-3xl leading-normal mb-8 font-bold">
      Starte eine neue Live-Session
    </h1>
    <form class="w-full max-w-md">
      <div class="-mx-3 mb-6">
        <div class="w-full px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2 text-left"
            >Name der Session</label
          >
          <input
            class="appearance-none block w-full bg-gray-50 text-gray-800 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Veranstaltungsname"
          />
        </div>
      </div>
      <button
        class="bg-green-500 w-full text-md hover:bg-green-600 text-white font-semibold py-3 px-12 border border-green-500 rounded shadow"
      >
        Neue Session beginnen
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewSessionPage",
};
</script>
