$(function () {
  $('#register').on('click', function () {
   var a;
   var b;
   var c;
     a=document.getElementById('account').value;
     b=document.getElementById('password').value;
     c=document.getElementById('password2').value;

   if (a==''||b==''||c=='') {alert('请把信息填完整')
    return;
 };

    if(b!=c){alert('两次输入的密码不一致!');
    return;


    };

    $.ajax({
      url: 'register',
      method: 'post',
      data: {
        account: $('#account').val(),
        password: $('#password').val()
      },
      dataType: 'json',
      success: function (data, status, xhr) {
        console.log(data);alert('成功注册');
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });
});