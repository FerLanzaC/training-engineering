<template>
 <footer class= "footer">
      <div class= "footer__body">
         <small class="footer__description">Desarrollado por Akurey.com Todos los derechos reservados.</small>
         <u class="footer__bottomBody">Terminos y Condiciones </u>
      </div>
   </footer>
</template>

<style>
.footer {
  background-color: #000000;
  height: 100px;
  font-size: 12px;
  color: #FFFFFF;
}

.footer__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-left: 21px;
}

.footer__description {
  margin-top: 10px;
  width: 150px;
}

.footer__bottomBody {
  margin-top: 15px;
}

@media screen and (min-width: 768px) {
  .footer__body {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    margin-right: 45px;
    margin-left: 45px;
  }
  .footer__description {
    margin-top: 30px;
    width: 150px;
  }
  .footer__bottomBody {
    margin-top: 30px;
  }
}
</style>