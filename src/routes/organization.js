import OrganizationCreate from '../components/organization/OrganizationCreate.vue'
import OrganizationList from '../components/organization/OrganizationList.vue'

const organization = [{
    path: '/organization-create',
    name: "OrganizationCreate",
    component: OrganizationCreate,

}, {
    path: '/organization',
    name: "OrganizationList",
    component: OrganizationList,
    
}, ]

export default organization;