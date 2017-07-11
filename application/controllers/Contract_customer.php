<?php
  class Contract_customer extends MY_Controller{
    public function __construct(){
      parent::__construct();
       $this->load->model("U_contract_customer_before_model");
    }
    //增加客户
    public function index(){
      $this->load->view('contactCustomer/index.html');
    }
    //咨询记录
    public function visitRecord(){
      $this->load->view('contactCustomer/visitRecord.html');
    }
     //回访提醒
    public function visitRemind(){
      $this->load->view('contactCustomer/visitRemind.html');
    }
	 //咨询预案
	 public function conPlan(){
      $this->load->view('contactCustomer/conPlan.html');
    }
	 //未签约分析
	 public function contractAnalysis(){
      $this->load->view('contactCustomer/contractAnalysis.html');
    } 
	//签约总结
	 public function contractSummary(){
      $this->load->view('contactCustomer/contractSummary.html');
    }
    /**
     * 新增咨询学生的CGI
     *
     * @return void
     */
    public function addStudent(){
      $data = array();//获取参数
      $keyConfig = array( 
            "u_student_name",//学生姓名
            "u_student_gender",//学生性别
            "u_student_mobile",//学生电话
            "u_student_wechat",//学生微信
            "u_student_email",//学生电子邮箱
            "u_student_origin",//学生来源
            "u_student_address",//学生现住址
            "u_student_city",//所在城市
            "u_student_birthday",//学生生日
            "u_student_referrer",//推荐人
            "u_intent_country",//意向留学国家
            "u_intent_time",//意向入学时间
            "u_family_income",//家庭年收入
            "u_current_education",//当前学历
            "u_current_school",//当前学校
            "u_current_major",//当前专业
            "u_current_grade",//当前年级
            "u_english_level",//英语水平
            "u_test_time",     //英语考试时间    
            "u_grade_time",    //英语出成绩时间 
            "u_sponsor_mate",  //是否担保配偶
            "u_sponser_child",  //是否担保小孩
            "u_student_score",   //学习成绩
            "u_visa_type",    //签证类型
            "u_visa_expdate",   //签证过期时间   
            "u_visa_reject",   //是否有拒签史
            "u_attendance_rate", //出勤率
            "u_student_remark", //备注
            "u_user_id",         //关联的顾问id 
            "u_student_status",   //学生状态:1.咨询阶段；2.未签约；3.已签约；4.办理中；5.已结案
            "u_intent_level",    //意向级别：1.高;2. 较高;3. 中;4. 低  
            "u_intent_major",    //意向专业
			      "u_father_name",//父亲姓名
            "u_father_mobile",//父亲电话
            "u_father_birthday",//父亲生日
            "u_father_work",//父亲工作
            "u_father_income",//父亲年收入
            "u_mother_name",//母亲姓名
            "u_mother_mobile",//母亲电话
            "u_mother_birthday",//母亲生日
            "u_mother_work",//母亲工作
            "u_mother_income",//母亲年收入
            "u_mate_name",//配偶姓名
            "u_mate_mobile",//配偶电话
            "u_mate_birthday",//配偶生日
            "u_mate_work",//配偶工作
            "u_mate_income",//配偶年收入
             );
      //接受消息
      foreach($keyConfig as $v){
        $data[$v] = $_POST[$v];
      }
      //加载模型插入数据库
       $this->U_contract_customer_before_model->addStudentItem($data);
       returnData("success",0);
    }
    /**
     * 获取学生列表的cgi
     *
     * @return void
     */
    public function getStudentList(){
      $p = $this->input->get("p");
      $pSize = $this->input->get("pSize");
      $p = $p ? $p : 1;
      $pSize = $pSize ? $pSize : 10;

      $offset = ( $p - 1 ) * $pSize;
      $data = $this->U_contract_customer_before_model->getStudentList($pSize,$offset);
      returnData($data);
    }
    /**
     * 删除学生的项的CGI
     *
     * @return void
     */
    public function delStudentItem(){
      $keys = $this->input->get("u_student_id");
      $flag = $this->U_contract_customer_before_model->delStudentItem($keys);
      returnData("ok");
    }
  }


?>