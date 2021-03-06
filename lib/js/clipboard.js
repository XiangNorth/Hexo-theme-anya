var arCon = document.getElementsByClassName("post-body");
for (var i = 0; i < arCon.length; i++) {
  arCon[i].addEventListener("copy", function (e) {
    var copyitem = window.getSelection().toString();
    if (copyitem && copyitem.length > 42) {
      setClipboardText(e);
    }
  });
}

function setClipboardText(event) {
  var clipboardData = event.clipboardData || window.clipboardData;
  if (clipboardData) {
    event.preventDefault();

    var htmlData =
      "" +
      "著作权归作者所有。<br>" +
      "商业转载请联系作者获得授权，非商业转载请注明出处。<br>" +
      "作者：" +
      CONFIG.site.author +
      "<br>" +
      "链接：" +
      window.location.href +
      "<br>" +
      "来源：" +
      CONFIG.site.title +
      "<br><br>" +
      window.getSelection().toString();
    var textData =
      "" +
      "著作权归作者所有。\n" +
      "商业转载请联系作者获得授权，非商业转载请注明出处。\n" +
      "作者：" +
      CONFIG.site.author +
      "\n" +
      "链接：" +
      window.location.href +
      "\n" +
      "来源：" +
      CONFIG.site.title +
      "\n\n" +
      window.getSelection().toString();

    clipboardData.setData("text/html", htmlData);
    clipboardData.setData("text/plain", textData);
  }
}
