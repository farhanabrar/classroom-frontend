<template>
  <div class="card">
    <div class="card-body">
        <div class="row" style="height:20vh">
          <div align="center">
            <slot name="center"/>
          </div>
            <div class="col-md-6 border-right border-black-100 overflow-auto" align="center">
                <slot name="left"/>
            </div>
            <div class="col-md-6" align="center">
                <slot name="right"/>
            </div>
        </div>
    </div>
  </div>
</template>