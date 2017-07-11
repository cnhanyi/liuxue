<?php
  class U_user_account_model extends CI_model{
    public function __construct(){
      parent::__construct();
    }
    /**
     * 增加用户
     *
     * @param array $data
     * @return void
     */
    public function addAccount($data){
      $flag = $this->db->insert('u_user_info',$data);
      if($flag ===false ){
        return false;//插入失败
      }
      $id = $this->db->insert_id();
      return true;
    }
    /**
     * 删除用户
     *
     * @param int $id  帐号的uid
     * @return void
     */
    public function delAccount($id){
      //清空用户表格
     $result =  $this->db->where('id',$id)->delete('u_user_info');
     if($result === false){
       return false;//删除失败
     }else{
       return ture;//删除成功
     }
    }
    /**
     * 验证用户
     *
     * @param [type] $username
     * @return void
     */
    public function checkAccount($username){
      $result = $this->db->where('u_user_account',$username)->get('u_user_info');
      return $result->row_array();
    } 
  }
  

?>