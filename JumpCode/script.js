    function handleLogin() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      const card = document.getElementById('loginCard');

      if (user === "evyatar5181" && pass === "evyatar2013") {
        // הוספת קלאס האנימציה
        card.classList.add('fade-out');

        // המתנה קצרה לסיום האנימציה (800 מילישניות) לפני המעבר לדף
        setTimeout(() => {
          window.location.href = "jumpcode.html";
        }, 800);
      } else {
        alert("פרטים שגויים, נסה שוב");
      }
    }