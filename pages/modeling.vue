<template>
  <div>
    <partials-title title="Halaman Modeling" />
    <textarea v-model="multiline" class="form-control"></textarea>
    <pre>{{ multiline }}</pre>
    <section>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox" > <span v-show="!checked">belum</span> setuju </label>
    </section>

    <section>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </section>

    <section>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </section>
    <section>
      <label for="provinsi">provinsi {{provinsi}}</label>
      <select name="" id="provinsi" class="form-control" v-model="provinsi">
        <option selected disabled value="">pilih provinsi</option>
        <option v-for="(item, i) in provoptionList" :key="i" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </section>
    <section>
        <label for="kota">kota{{kota}}</label>
        <select name="" id="kota" class="form-control" v-model="kota">
            <option selected disabled value="">pilih kota</option>
            <option v-if="item.prov_id==provinsi" v-for="(item, index) in OLkota" :key="index" value="item.id" >{{`${item.name} (${item.prov_id})`}}</option>
        </select>
    </section>
    <section class="mt-5">
        <form-select-option :optionList="provoptionList" placeholder="pilih provinsi"/>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multiline: "",
      checked: false,
      checkedNames: [],
      selected: "",
      provinsi: "",
      provoptionList: [
        { id: 1, name: "DKI Jakarta" },
        { id: 2, name: "Jawa Barat" },
        { id: 3, name: "Jawa Timur" },
        { id: 4, name: "Jawa Tengah" },
        { id: 5, name: "DIY Jogjakarta" },
        { id: 6, name: "Banten" },
      ],
      kota: "",
      OLkota: [
        { id: 21, name: "AAA", prov_id: 1 },
        { id: 22, name: "AAB", prov_id: 2 },
        { id: 23, name: "AAC", prov_id: 2 },
        { id: 24, name: "AAD", prov_id: 3 },
        { id: 25, name: "AAF", prov_id: 4 },
        { id: 26, name: "BAF", prov_id: 4 },
        { id: 27, name: "CAF", prov_id: 5 },
        { id: 28, name: "ADF", prov_id: 6 },
      ],
    };
  },
};
</script>