<template>
   <div class= "searcher">
     <img src="../assets/img/banner-mobile.png" class="searcher__image" >
     <div class="searcher__title">Los Mejores agentes de seguridad</div>
     <div class="searcher__bar">
       <input type="text" class= "searcher__input" placeholder=" Buscar por Ubicación"> 
       <img src="../assets/img/search.png" class="searcher__icon"/>     
      </div>
    </div>
</template>


<style>
.searcher {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.searcher__image {
  margin: 0;
}

.searcher__title {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 28,13px;
  width: 238px;
  height: 56px;
  margin-top: 15px;
  margin-left: 35px;
  margin-right: 95px;
}

.searcher__bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  width: 330px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #8E8E8E;
  margin-top: 15px;
  margin-left: 35px;
  outline: none;
}

.searcher__input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-size: 15px;
  outline: none;
  border-radius: 20px;
}

.searcher__icon {
  width: 30px;
  margin-left: 90px;
}
@media screen and (min-width: 768px) {
  .searcher__image {
    content: url("../assets/img/banner.png");
    height: 468px;
  }
  .searcher__title {
    color: #FFFFFF;
    font-size: 36px;
    line-height: 42,19px;
    width: 359px;
    height: 83px;
    margin-top: -224px;
    margin-left: 50px;
  }
  .searcher__bar {
    margin-bottom: 110px;
    background-color: white;
    width: 663px;
  }
  .searcher__icon {
    margin-left: 390px;
  }
}
@media (min-width: 1204px) {
  .searcher__image {
    content: url("../assets/img/banner.png");
    height: 550px;
  }
  .searcher__title {
    color: #FFFFFF;
    font-size: 36px;
    line-height: 42,19px;
    width: 591px;
    height: 83px;
    margin-top: -224px;
    margin-left: 50px;
  }
  .searcher__bar {
    margin-top: 0px;
    margin-bottom: 130px;
    background-color: white;
    width: 663px;
  }
  .searcher__icon {
    margin-left: 390px;
  }
}
</style>
