<?php
  
  class MY_Controller extends CI_Controller{
    public function __construct(){
      parent::__construct();
      if(!$this->session->islogin){
        //重定向
        $this->session->unset_userdata(array('account','islogin'));
        redirect(site_url('getway/index'));//重新定向到登陆页面
      }
    }
  }

?>