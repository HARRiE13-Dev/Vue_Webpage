<template>
   <form
                      ref="addProductForm"
                      @submit.prevent="onSubmit"
                      enctype="multipart/form-data"
                    >
                      <label class="block my-3 text-gray-700 text-md" for="name"
                        >รหัสครุภัณฑ์</label
                      >
                      <input
                        v-model="code"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="Product name"
                      />
                      <div
                        v-if="v$.code.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.code.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ชื่อ</label
                      >
                      <input
                        v-model="name"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.name.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.name.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ยี่ห้อ</label
                      >
                      <input
                        v-model="brand"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.brand.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.brand.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >เลขตัวเครื่อง (Serial Number)</label
                      >
                      <input
                        v-model="serial_no"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.serial_no.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.serial_no.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >วันที่จัดซื้อ</label
                      >
                      <input
                        v-model="date"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.date.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.date.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >สังกัด</label
                      >
                      <input
                        v-model="users"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.users.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.users.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ตำแหน่งจัดเก็บ</label
                      >
                      <input
                        v-model="room"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.room.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.room.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ผู้รับผิดชอบ</label
                      >
                      <input
                        v-model="caretaker"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.caretaker.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.caretaker.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ประเภท</label
                      >
                      <input
                        v-model="type"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.type.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.type.$errors[0].$message }}
                      </div>

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="detail"
                        >รายละเอียด</label
                      >
                      <textarea
                        v-model="detail"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        rows="5"
                        placeholder="Product description"
                      ></textarea>

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="price"
                        >ราคา</label
                      >
                      <input
                        v-model="price"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="0.00"
                      />
                      <div
                        v-if="v$.price.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.price.$errors[0].$message }}
                      </div>

                      <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2">
                          <button
                            @click="submitForm"
                            class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            บันทึกรายการ
                          </button>
                        </div>

                        <div>
                          <button
                            @click="onResetForm"
                            class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                            type="button"
                          >
                            ล้าง
                          </button>
                        </div>
                      </div>
                    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>