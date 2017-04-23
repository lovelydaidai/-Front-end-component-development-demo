/**
 * Created by pl on 2017/4/23.
 */

function Drag() {
    this.getId = function (Id) {
        return(document.getElementById(Id));
    };
    this.lineXpos = function(){
        return this.getId('lineId').offsetLeft;
    };
    this.initialization();
}

Drag.prototype = {
    //初始化
  initialization: function () {
    var _self = this;
    _self.lineShow();
  },
  //拖动条，当页面加载完成之后，再加载或显示出来
  lineShow:function () {
      var _self = this;
      //console.log(_self.getId("lineId").getAttribute("id"));
      _self.getId("lineId").style.display = "block";
      _self.btnHover();
  },

   // 鼠标移动到滑块上的时候，显示拖动示意图
  btnHover:function () {
      var _self = this;
      _self.getId("btnId").onmouseover = function () {
          _self.getId("popStar").style.display = "block";
      };
      _self.getId("btnId").onmouseout = function () {
          _self.getId("popStar").style.display = "none";
      };
      _self.btnDown();
    },
    //当鼠标按下的时候，滑块出来
  btnDown:function () {
      var _self = this;
      _self.getId("btnId").onmousedown = function () {
          _self.getId("popmoveId").style.display = "block";
          _self.getId("popblockId").style.display = "block";
          _self.btnMove();
      };

  },
   btnMove:function () {
      var _self = this;
      _self.getId("btnId").onmousemove = function (event) {
          var _n = event.clientX - _self.lineXpos()-20;
          this.style.left = _n +"px";
      _self.blockMove(_n);
      }
      _self.btnUp();
  },
  //鼠标抬起，清除鼠标点击事件
  btnUp:function () {
      var _self = this;
      _self.getId("btnId").onmouseup = function () {
          _self.getId("btnId").onmousemove = null;
          _self.getId("btnId").onmouseover = null;
          _self.getId("popmoveId").style.display = "none";
          _self.getId("popblockId").style.display = "none";
          _self.getId("popStar").style.display = "none";
          _self.getId("btnId").style.left = 0 +"px";
      }
  },
  //方块移动与匹配
  blockMove:function (_n) {
      var _self = this;
      _self.getId("popblockId").style.left = _n +"px";
      _self.moveEnd(_n);
  },
  //判断方块位置是否到达
  moveEnd:function (_n) {
      var _self =this;
      if (_n === 165){
          alert("拼图成功！");
          _self.getId("btnId").onmousemove = null;
          _self.getId("btnId").onmouseover = null;
          _self.getId("popmoveId").style.display = "none";
          _self.getId("popblockId").style.display = "none";
          _self.getId("popStar").style.display = "none";
          _self.getId("btnId").style.left = 0 +"px";
      }
  }  
};


new Drag();

