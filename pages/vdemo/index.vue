<template>
    <div container>
        <div class="main">
            <div class="maincontent">
                <div class="maincontent-item">
                    <p>test1</p>
                    <demo />
                </div>
                <div class="maincontent-item">
                    <p>test2</p>
                </div>
                <div class="maincontent-item">
                    <p>test3</p>
                </div>
                <div class="maincontent-item">
                    <p>test4</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Demo from "@/components/atoms/Demo.vue";
export default {
    components: {
    Demo,
  },
}
</script>