<template>
  <div class="h-screen px-2 py-20 bg-gray-300">
    <div class="max-w-md mx-auto overflow-hidden bg-white rounded-lg md:max-w-lg">
        <div class="md:flex">
            <div class="w-full px-4 py-6 ">
                <div class="mb-1"> <span class="text-sm">Full name</span> <input type="text" class="w-full h-12 px-3 border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600"> </div>
                <div class="mb-1"> <span class="text-sm">Description</span> <textarea type="text" class="w-full h-24 px-3 py-1 border-2 border-blue-400 rounded resize-none focus:outline-none focus:border-blue-600"></textarea> </div>
                <div class="mb-1"> <span class="text-sm text-gray-400">You will be able to edit this information later</span> </div>
                <div class="mb-1"> <span>Attachments</span>
                    <div class="relative flex items-center justify-center h-32 bg-gray-100 border-2 border-blue-700 border-dashed border-dotted rounded-lg">
                        <div class="absolute">
                            <div class="flex flex-col items-center"> <i class="text-blue-700 fa fa-folder-open fa-3x"></i> <span class="block font-normal text-gray-400">Attach you files here</span> </div>
                        </div> <input type="file" class="w-full h-full opacity-0" name="">
                    </div>
                </div>
                <div class="mt-3 text-right"> <a href="#">Cancel</a> <button class="w-32 h-10 ml-2 text-white bg-blue-600 rounded hover:bg-blue-700">Create</button> </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>