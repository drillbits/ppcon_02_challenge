$(function() {

  // 問題1 セレクタ
  $("#get_name").click(function(){
    $("#subject01_result").html($("#yamada_name").html());
  });

  // 問題2 要素の追加
  function add_member(target, id, name) {
    if (target.find("#" + id).length <= 0) {
      target.append($("<li>", {id: id}).text(name));
    }
  }

  $("#add_sakurako").click(function(){
    add_member($("#member_list"), "sakurako", "櫻子")
  });

  $("#add_himawari").click(function(){
    add_member($("#member_list"), "himawari", "向日葵")
  });

  // 問題3 要素の削除
  $("#remove_akari").click(function(){
    $("#member_list_remove #akari").remove();
  });

  // 問題4 表示、非表示の切り替え
  $("#change_visible_momo").click(function(){
    $("#stealth_momo").toggle();
  });

  // 問題5 複数の要素の変更
  $("#change_header_html").click(function(){
    $("h2").each(function(){
      var elem = $(this);
      if (!elem.data('header_changed')) {
        elem.text("【" + elem.text() + "】");
        elem.data("header_changed", true);
      }
    });
  });

});
