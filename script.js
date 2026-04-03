/* ═══════════════════════════════════════
   HIMANSHU KALA — script.js (FINAL)
   Chatbot + Contact Form + Telegram
═══════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Email anti-spam ──────────────── */
  var u = 'hkala402';
  var d = 'gmail.com';
  var email = u + '@' + d;
  var mailto = 'mailto:' + email;

  ['email-about','email-contact-val'].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.textContent=email;
  });

  ['email-about','email-contact-link','email-footer-link'].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.href=mailto;
  });

  /* ── Typewriter Effect ────────────── */
  var roles=[
    "AI QA Engineer",
    "LLM Output Validator",
    "Hallucination Hunter",
    "RAG Pipeline Tester",
    "Prompt Test Engineer",
    "AI Safety Tester"
  ];

  var tw=document.getElementById("typewriter");

  if(tw){
    var ri=0,ci=0,del=false;

    function loop(){
      var cur=roles[ri];
      del?ci--:ci++;
      tw.textContent=cur.slice(0,ci);

      if(!del && ci===cur.length){
        setTimeout(()=>del=true,1500);
      }

      if(del && ci===0){
        del=false;
        ri=(ri+1)%roles.length;
      }

      setTimeout(loop, del?50:100);
    }

    setTimeout(loop,500);
  }

  /* ── Navbar Scroll Effect ─────────── */
  var hdr=document.getElementById("site-header");

  if(hdr){
    window.addEventListener("scroll",function(){
      hdr.style.background =
        window.scrollY>40
          ? "rgba(7,7,13,0.98)"
          : "rgba(7,7,13,0.9)";
    });
  }

  /* ── Contact Form ─────────────────── */
  var form=document.getElementById("contact-form");

  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();

      var name=document.getElementById("cf-name").value;
      var em=document.getElementById("cf-email").value;
      var sub=document.getElementById("cf-subject").value;
      var msg=document.getElementById("cf-message").value;

      var text =
`📬 NEW CONTACT FORM

👤 Name: ${name}
📧 Email: ${em}
📌 Subject: ${sub}
💬 Message: ${msg}`;

      sendToTelegram(text);

      alert("Message sent successfully ✅");
      form.reset();
    });
  }

})();

/* ══════════════════════════════════════
   🔥 TELEGRAM CONFIG (EDIT THIS ONLY)
══════════════════════════════════════ */

var TELEGRAM_BOT_TOKEN = "8589871867:AAGWrLuW5CcAIoe9WQkc_DWil9Sc38CCgkk";
var TELEGRAM_CHAT_ID   = "8494765723";

/* ══════════════════════════════════════
   SEND MESSAGE FUNCTION
══════════════════════════════════════ */

function sendToTelegram(message) {

  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes("PASTE")) {
    console.error("Telegram token missing ❌");
    return;
  }

  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Telegram success ✅", data);
  })
  .catch(err => {
    console.error("Telegram error ❌", err);
  });
}
