import axios from 'axios'

//这里api是代理flag,通过这个api告诉webpack把请求发到3000端口,即express后端
let baseUrl = 'http://127.0.0.1:8080/api/api' //开发环境用
// let baseUrl = '/api'


// 登录
export const apiLogin = params => { return axios.post(`${baseUrl}/login`, params).then(res => res.data) }
//进入项目列表
export const apiHome = params => { return axios.post(`${baseUrl}/home`, params) }
//进入项目主页
export const apiPrj002 = params => { return axios.post(`${baseUrl}/home/prj002`, params) }

// 添加患者
export const apiAddPatient = params => { return axios.post(`${baseUrl}/prj002/user/add`, params) }
// 搜索患者
export const apiSearchPatient = params => { return axios.post(`${baseUrl}/prj002/user/search`, params) }
// 获取患者列表
export const apiGetPatientsList = params => { return axios.post(`${baseUrl}/prj002/user/list`, params) }
// 删除单个患者信息
export const apiRemovePatient = params => { return axios.post(`${baseUrl}/prj002/user/remove`, params) }

// 获取单个患者一般信息
// tip 使用params,对于get请求,会把params的参数附加在url后面,实际发送的是一个完整的带参数url请求
export const apiGetPatientInfoForm = params => { return axios.get(`${baseUrl}/prj002/user/info`, {params:params}) }
// 修改单个患者一般信息
export const apiUpdatePatientInfoForm = params => { return axios.post(`${baseUrl}/prj002/user/info`, params) }

// 获取单个患者某个Form
export const apiGetPatientDataForm = params => { return axios.get(`${baseUrl}/prj002/user/form`, {params:params}) }
// 创建单个患者某个Form
export const apiCreatePatientDataForm = params => { return axios.post(`${baseUrl}/prj002/user/form`, params) }
// 修改单个患者某个Form
export const apiUpdatePatientDataForm = params => { return axios.patch(`${baseUrl}/prj002/user/form`, params) }


export const batchRemoveUser = params => { return axios.get(`${baseUrl}/prj002/user/batchremove`, { params: params }) }
