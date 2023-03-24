import Vue from 'vue';

Vue.directive('tableDrag', {
  inserted: function(el) {
    el = el.getElementsByClassName('el-table__body-wrapper')[0];
    el.onmousedown = function(e) {
      if (!(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        return
      }
      el.style.cursor = 'grab';
      let gapX = event.clientX;
      let startX = el.scrollLeft;
      document.onmousemove = function(e) {
      let x = e.clientX - gapX;
        el.scrollLeft = startX - x;
        return false;
      };
      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
        el.style.cursor = 'default';
      };
      };
  }
});