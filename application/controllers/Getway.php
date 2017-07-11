<?php

  class Getway extends CI_Controller
  {
    public function __construct(){
          parent::__construct();
    }
    public function index(){
      //展示页面的输出模板
      $this->load->view('public/index.html');
    }
    //登陆cgi
    public function login(){
      //登陆的cgi
      $data['account'] = $this->input->post('account');
      $data['pwd'] = $this->input->post('pwd');

      $this->load->model('U_user_account_model');
      $useInfo = $this->U_user_account_model->checkAccount(trim($data['account']));
      if($useInfo){
        if($useInfo['u_password'] === md5($data['pwd'])){
          $userData = array(
            'account' =>$data['account'],
            'islogin' =>true
            );
          $this->session->set_userdata($userData);
          returnData('你登陆成功');
        }else{
          returnData('密码错误',-102);
        }
      }
      returnData('你没有权限',-101);
    }
    public function logout(){
      //清除Cookie
      $this->session->unset_userdata(array('account','islogin'));
      redirect(site_url('getway/index'));
    }
  }

?>
