$(function() {

  // 問題1 セレクタ
  $("#get_name").click(function(){
    $("#subject01_result").html($("#yamada_name").html());
  });

  // 問題2 要素の追加
  function add_member(target, name) {
    target.append($("<li>").text(name));
  }

  $("#add_sakurako").click(function(){
    add_member($("#member_list"), "櫻子")
  });

  $("#add_himawari").click(function(){
    add_member($("#member_list"), "向日葵")
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
      $(this).text("【" + $(this).text() + "】");
    });
  });

});
