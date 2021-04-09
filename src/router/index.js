import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () =>
    import ("@/containers/TheContainer");

// Views
const Dashboard = () =>
    import ("@/views/Dashboard");

const NewRequest = () =>
    import ("@/views/NewRequest");


// Views - Pages
const Page404 = () =>
    import ("@/views/pages/Page404");
const Page500 = () =>
    import ("@/views/pages/Page500");
const Login = () =>
    import ("@/views/pages/Login");
const Register = () =>
    import ("@/views/pages/Register");

// Users
const Users = () =>
    import ("@/views/users/Users");
const User = () =>
    import ("@/views/users/User");
// Activity
const AllProjects = () =>
    import ("@/views/activity/AllProjects");
const AllContracts = () =>
    import ("@/views/activity/AllContracts");
const Reviews = () =>
    import ("@/views/activity/Reviews");
const Appointments = () =>
    import ("@/views/activity/Appointments");

// Purchased Services
const AllServices = () =>
    import ("@/views/Purchased-Services/AllServices");
const SaleHistory = () =>
    import ("@/views/Purchased-Services/SaleHistory");

// Jobs
const SearchJobs = () =>
    import ("@/views/Jobs/SearchJobs");
const JobsOffers = () =>
    import ("@/views/Jobs/JobsOffers");

// Marketing
const NewsLetter = () =>
    import ("@/views/marketing/NewsLetter");
const PopupSetting = () =>
    import ("@/views/marketing/PopupSetting");
const Discount = () =>
    import ("@/views/marketing/Discount");

// Payments 
const UpfrontRequest = () =>
    import ("@/views/payments/UpfrontRequest");
const RefundRequest = () =>
    import ("@/views/payments/RefundRequest");
const ReleaseRequest = () =>
    import ("@/views/payments/ReleaseRequest");
const Payouts = () =>
    import ("@/views/payments/Payouts");
const PayInOut = () =>
    import ("@/views/payments/PayInOut");
const EscrowAccount = () =>
    import ("@/views/payments/EscrowAccount");
const Invoice = () =>
    import ("@/views/payments/Invoice");

// customers 
const PortalClients = () =>
    import ("@/views/customers/PortalClients");
const PortalUsers = () =>
    import ("@/views/customers/PortalUsers");

// income 
const ClientsIncome = () =>
    import ("@/views/income/ClientsIncome");
const PortalIncome = () =>
    import ("@/views/income/PortalIncome");

// Portal Settings 
const Languages = () =>
    import ("@/views/portal-settings/Languages");
const Settings = () =>
    import ("@/views/portal-settings/Settings");
const CompanyType = () =>
    import ("@/views/portal-settings/CompanyType");
const AddCountrys = () =>
    import ("@/views/portal-settings/AddCountrys");
const Admin = () =>
    import ("@/views/portal-settings/Admin");
const TextModule = () =>
    import ("@/views/portal-settings/TextModule");
const Reasons = () =>
    import ("@/views/portal-settings/Reasons");
const PolicyTerms = () =>
    import ("@/views/portal-settings/PolicyTerms");
const OurServices = () =>
    import ("@/views/portal-settings/OurServices");
const ServiceComission = () =>
    import ("@/views/portal-settings/ServiceComission");
const AccountUpgradeClient = () =>
    import ("@/views/portal-settings/AccountUpgradeClient");
const CompanySkill = () =>
    import ("@/views/portal-settings/CompanySkill");
const CompanyCharacter = () =>
    import ("@/views/portal-settings/CompanyCharacter");
const BidsAmountClient = () =>
    import ("@/views/portal-settings/BidsAmountClient");

Vue.use(Router);

export default new Router({
    mode: "history",
    linkActiveClass: "active",
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes(),
});

function configRoutes() {
    return [{
            path: "/",
            redirect: "/dashboard",
            name: "Home",
            component: TheContainer,
            children: [{
                    path: "dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                },
                {
                    path: "/newrequest",
                    name: "New Request",
                    component: NewRequest,
                },
                {
                    path: "activity",
                    redirect: "/activity/all-projects",
                    name: "Activity",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "all-projects",
                            name: "All Projects",
                            component: AllProjects,
                        },
                        {
                            path: "all-contracts",
                            name: "All Contracts",
                            component: AllContracts,
                        },
                        {
                            path: "reviews",
                            name: "Reviews",
                            component: Reviews,
                        },
                        {
                            path: "appointments",
                            name: "Appointments",
                            component: Appointments,
                        },
                    ],
                },
                {
                    path: "purchased-services",
                    redirect: "/purchased-services/all-services",
                    name: "Purchased Services",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "all-services",
                            name: "All Services",
                            component: AllServices,
                        },
                        {
                            path: "sale-history",
                            name: "Sale History",
                            component: SaleHistory,
                        },
                    ],
                },
                {
                    path: "jobs",
                    redirect: "/jobs/search-jobs",
                    name: "Jobs",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "search-jobs",
                            name: "Search Jobs",
                            component: SearchJobs,
                        },
                        {
                            path: "jobs-offers",
                            name: "Jobs Offers",
                            component: JobsOffers,
                        },
                    ],
                },

                {
                    path: "marketing",
                    redirect: "/marketing/news-letter",
                    name: "Marketing",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "news-letter",
                            name: "News Letter",
                            component: NewsLetter,
                        },
                        {
                            path: "popup-settings",
                            name: "Popup Setting",
                            component: PopupSetting,
                        },
                        {
                            path: "discount",
                            name: "discount",
                            component: Discount,
                        },

                    ],
                },

                {
                    path: "payments",
                    redirect: "/payments/upfront-request",
                    name: "Payments",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "upfront-request",
                            name: "Upfront Request",
                            component: UpfrontRequest,
                        },
                        {
                            path: "refund-request",
                            name: "Refund Request",
                            component: RefundRequest,
                        },
                        {
                            path: "release-request",
                            name: "Release Request",
                            component: ReleaseRequest,
                        },
                        {
                            path: "escrow-accounts",
                            name: "Escrow Account",
                            component: EscrowAccount,
                        },
                        {
                            path: "in-out-accounts",
                            name: "Pay In Out",
                            component: PayInOut,
                        },
                        {
                            path: "invoice",
                            name: "Invoice",
                            component: Invoice,
                        },
                        {
                            path: "payouts",
                            name: "Payouts",
                            component: Payouts,
                        },


                    ],
                },

                {
                    path: "customers",
                    redirect: "/customers/portal-clients",
                    name: "Customers",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "portal-clients",
                            name: "Portal Clients",
                            component: PortalClients,
                        },
                        {
                            path: "portal-users",
                            name: "Portal Users",
                            component: PortalUsers,
                        }

                    ],
                },

                {
                    path: "income",
                    redirect: "/income/client-income",
                    name: "Income",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "clients-income",
                            name: "clients Income",
                            component: ClientsIncome,
                        },
                        {
                            path: "Portal-income",
                            name: "Portal Income",
                            component: PortalIncome,
                        }

                    ],
                },

                {
                    path: "portal-settings",
                    redirect: "/portal-settings/languages",
                    name: "portal-settings",
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "website-languages",
                            name: "Website Languages",
                            component: Languages,
                        },
                        {
                            path: "website-settings",
                            name: "Website Settings",
                            component: Settings,
                        },
                        {
                            path: "company-type",
                            name: "Company Type",
                            component: CompanyType,
                        },
                        {
                            path: "add-country",
                            name: "AddCountrys",
                            component: AddCountrys,
                        },
                        {
                            path: "Admin",
                            name: "Admin",
                            component: Admin,
                        },
                        {
                            path: "text-module",
                            name: "Text Module",
                            component: TextModule,
                        },
                        {
                            path: "reasons",
                            name: "Reasons",
                            component: Reasons,
                        },
                        {
                            path: "policy-and-terms",
                            name: "Policy and Terms",
                            component: PolicyTerms,
                        },
                        {
                            path: "our-services",
                            name: "Our Services",
                            component: OurServices,
                        },
                        {
                            path: "services-comission",
                            name: "Services Comission",
                            component: ServiceComission,
                        },
                        {
                            path: "account-upgrade-client",
                            name: "Account Upgrade Client",
                            component: AccountUpgradeClient,
                        },
                        {
                            path: "company-skills",
                            name: "Company Skill",
                            component: CompanySkill,
                        },
                        {
                            path: "company-character",
                            name: "Company Character",
                            component: CompanyCharacter,
                        },
                        {
                            path: "bids-amount-client",
                            name: "Bids Amount Client",
                            component: BidsAmountClient,
                        },
                    ],
                },

                // {
                //     path: "charts",
                //     name: "Charts",
                //     component: Charts,
                // },
                // {
                //     path: "widgets",
                //     name: "Widgets",
                //     component: Widgets,
                // },
                {
                    path: "users",
                    meta: {
                        label: "Users",
                    },
                    component: {
                        render(c) {
                            return c("router-view");
                        },
                    },
                    children: [{
                            path: "",
                            name: "Users",
                            component: Users,
                        },
                        {
                            path: ":id",
                            meta: {
                                label: "User Details",
                            },
                            name: "User",
                            component: User,
                        },
                    ],
                },

            ],
        },
        {
            path: "/pages",
            redirect: "/pages/404",
            name: "Pages",
            component: {
                render(c) {
                    return c("router-view");
                },
            },
            children: [{
                    path: "404",
                    name: "Page404",
                    component: Page404,
                },
                {
                    path: "500",
                    name: "Page500",
                    component: Page500,
                },
                {
                    path: "login",
                    name: "Login",
                    component: Login,
                },
                {
                    path: "register",
                    name: "Register",
                    component: Register,
                },
            ],
        },
    ];
}