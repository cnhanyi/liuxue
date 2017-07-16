<?php
  date_default_timezone_set("PRC");
  class U_contract_customer_before_model extends CI_model{
    const TBL_S = "u_student_info"; 
    const TBL_C = "u_consult_record"; 
    const TBL_P = "u_consult_plan"; 
    const TBL_U = "u_summary"; 

    public function __construct(){
      parent::__construct();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 新增一个咨询学生
     *
     * @param [type] $data
     * @return void
     */
    public function addStudentItem($data){
      $this->db->insert(self::TBL_S,$data);
      ;
    }
   /**
    * 获取学生列表
    *
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getStudentList($pSize,$offset){

      //获取结果的数量
      $query = $this->db->query('select * from u_student_info where u_student_status = 1');  
      $count = $query->num_rows();

      //获取分页的数量等
      $this->db->select('*');
      $this->db->where('u_student_status', 1);
      $list = $this->db->limit($pSize,$offset)->get(self::TBL_S);
      $res = $list->result_array();
      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;

    }
   
   /**
    * 编辑某一个学生的记录
    *
    * @param [type] $data
    * @return void
    */
  public function updateStudentItem($s_id,$data){

    $this->db->where('u_student_id', $s_id);
    $this->db->update(self::TBL_S, $data);

    $flag =  $this->db->affected_rows();
    if($flag == 0){
      return false;
    }
    return true;
  }


   /**
    * 更新某一个学生的记录，转向留学中
    *
    * @param [type] $data
    * @return void
    */
  public function transStudentItem($s_id){

    $this->db->set('u_student_status', 2, false);
    $this->db->where('u_student_id', $s_id);
    $this->db->update(self::TBL_S);

    $flag =  $this->db->affected_rows();
    if($flag == 0){
      return false;
    }
    return true;

  }


   /**
    * 删除某一个学生的记录（状态改为6）
    *
    * @param [type] $data
    * @return void
    */
  public function delStudentItem($s_id){

    $this->db->set('u_student_status', 6, false);
    $this->db->where('u_student_id', $s_id);
    $this->db->update(self::TBL_S);

    $flag =  $this->db->affected_rows();
    if($flag == 0){
      return false;
    }
    return true;
  }


  /**
   * 生成学生的编号
   *
   * @return void
   */
  public function makeSID(){
        $date = date('Y-m-d'); //获取今天的日期
        $this->db->where("DATE(u_consult_date)",$date);
        $res = $this->db->get(self::TBL_S);
        $num = $res->num_rows(); 
        $num++; 
        $num=str_pad($num,3,"0",STR_PAD_LEFT);
        $sid = date('Ymd').$num;
        return $sid; 
  
  }



     /////////////////////////////////////////////////////////////////////////////////////////////
     /**
     * 新增一条咨询记录
     *
     * @param [type] $data
     * @return void
     */
    public function addRecordItem($data){
      $this->db->insert(self::TBL_C,$data);
      ;
    }


   /**
    * 获取咨询记录列表
    *
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getRecordList($pSize,$offset){
      $count = $this->db->count_all(self::TBL_C);//获取所有咨询记录的数量
      $this->db->select('*');
      $list = $this->db->limit($pSize,$offset)->get(self::TBL_C);
      $res = $list->result_array();
      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }


   /**
    * 获取某一个指定学生的咨询记录列表
    *
    * @param [type] $s_id
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getOneRecordList($s_id,$pSize,$offset){
      //获取结果的数量
      $query = $this->db->query('select * from u_consult_record where u_student_id = '.$s_id);  
      $count = $query->num_rows();

      //获取分页的数量等
      $this->db->select('*');
      $this->db->where('u_student_id', $s_id);
      $list = $this->db->limit($pSize,$offset)->get(self::TBL_C);
      $res = $list->result_array();
      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }


    /**
    * 编辑某一条咨询记录
    *
    * @param [type] $data
    * @return void
    */
  public function updateRecordItem($c_id,$data){

    $this->db->where('u_consult_id', $c_id);
    $this->db->update(self::TBL_C, $data);

    $flag =  $this->db->affected_rows();
    if($flag == 0){
      return false;
    }
    return true;
  }


   /**
    * 删除某一条咨询记录
    *
    * @param [type] $data
    * @return void
    */
  public function delRecordItem($data){
    $flag = $this->db->where_in("u_consult_id",$data)->delete(self::TBL_C);
    if(!$flag){
      return false;
    }
    return true;
  }



     /////////////////////////////////////////////////////////////////////////////////////////////
     /**
     * 新增一条咨询预案
     *
     * @param [type] $data
     * @return void
     */
    public function addPlanItem($data){
      $this->db->insert(self::TBL_P,$data);
      ;
    }


   /**
    * 获取咨询预案列表
    *
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getPlanList($pSize,$offset){
      $count = $this->db->count_all(self::TBL_P);
      $this->db->select('*');
      $list = $this->db->limit($pSize,$offset)->get(self::TBL_P);
      $res = $list->result_array();
      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }


       /**
    * 获取某一个指定学生的咨询预案列表
    *
    * @param [type] $s_id
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getOnePlanList($s_id,$pSize,$offset){
      //获取结果的数量
      $query = $this->db->query('select * from u_consult_plan where u_student_id = '.$s_id);  
      $count = $query->num_rows();

      //获取分页的数量等
      $this->db->select('*');
      $this->db->where('u_student_id', $s_id);
      $list = $this->db->limit($pSize,$offset)->get(self::TBL_C);
      $res = $list->result_array();
      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }


    /**
    * 编辑某一条咨询预案
    *
    * @param [type] $data
    * @return void
    */
  public function updatePlanItem($p_id,$data){

    $this->db->where('u_plan_id', $p_id);
    $this->db->update(self::TBL_P, $data);

    $flag =  $this->db->affected_rows();

    if($flag == 0){
      return false;
    }
    return true;
  }



   /**
    * 删除某一条咨询预案
    *
    * @param [type] $data
    * @return void
    */
  public function delPlanItem($data){
    $flag = $this->db->where_in("u_plan_id",$data)->delete(self::TBL_C);
    if(!$flag){
      return false;
    }
    return true;
  }


     /////////////////////////////////////////////////////////////////////////////////////////////
     /**
     * 新增一条签约/未签约总结
     *
     * @param [type] $data
     * @return void
     */
    public function addSummaryItem($data){
      $this->db->insert(self::TBL_U,$data);
      ;
    }


   /**
    * 获取签约/未签约总结列表
    *
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getSummaryList($status,$pSize,$offset){
      //获取结果的数量      
      $query = $this->db->get_where(self::TBL_U, array('u_sign_status' => $status));      
      $count = $query->num_rows();

      //获取分页的数量等
      $this->db->select('*');
      $this->db->where('u_sign_status', $status);
      $list = $this->db->limit($pSize,$offset)->get(self::TBL_U);
      $res = $list->result_array();
      $data['cnt'] = $count;
      $data['list'] = $res;
      return $data;
    }


   /**
    * 获取某一个指定学生的签约/未签约总结
    *
    * @param [type] $s_id
    * @param [type] $pSize
    * @param [type] $offset
    * @return void
    */
    public function getOneSummary($s_id){
      $query = $this->db->get_where(self::TBL_U, array('u_student_id' => $s_id));  
      $data = $query->result_array();   
      return $data;
    }


    /**
    * 编辑某一条签约/未签约总结
    *
    * @param [type] $data
    * @return void
    */
  public function updateSummaryItem($s_id,$data){

    $this->db->where('u_sum_id', $s_id);
    $this->db->update(self::TBL_U, $data);

    $flag =  $this->db->affected_rows();
    if($flag == 0){
      return false;
    }
    return true;
  }


   /**
    * 删除某一条签约/未签约总结
    *
    * @param [type] $data
    * @return void
    */
  public function delSummaryItem($data){
    $flag = $this->db->where_in("u_sum_id",$data)->delete(self::TBL_U);
    if(!$flag){
      return false;
    }
    return true;
  }




}
?>