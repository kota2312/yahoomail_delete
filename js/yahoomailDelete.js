var deleteMailCustom = {
  scroll: function () {
    //scroll
    let scroll_target = document.getElementsByClassName(
      "sc-19srpls-6 fOSNBw"
    )[0];
    if (scroll_target) {
      scroll_target.scrollBy(0, 1000);
    }
  },
  start: function () {
    //削除要素の名前
    let delete_name = document.querySelectorAll(
      'td[class="sc-1xxpdrg-0 erjpFb sc-1xxpdrg-5 inGUcS"] > span[data-cy="mailListFromOrTo"]'
    );
    //削除ボタン
    let delete_button = document.querySelector(
      "button[data-cy='toolBarDelete']"
    );
    if (
      delete_name &&
      delete_name[0].parentNode.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.childNodes[0].firstChild
        .lastChild
    ) {
      for (let i = 0; i < delete_name.length; i++) {
        //チェックボックス
        let mail_input =
          delete_name[i].parentNode.previousElementSibling
            .previousElementSibling.previousElementSibling
            .previousElementSibling.childNodes[0].firstChild.lastChild;
        if (
          delete_name[i].innerHTML.indexOf("任意の文字列") != -1 &&
          mail_input &&
          !mail_input.checked
        ) {
          mail_input.checked = true;
          mail_input.click();
          if (delete_button) {
            delete_button.click();
          }
          deleteMailCustom.scroll();
          //console.log(count++);
        } else {
          deleteMailCustom.scroll();
        }
      }
    }
  },
};

setInterval("deleteMailCustom.start()", 3000);
