export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/dashboard',
            icon: 'cil-speedometer',
            // badge: {
            //     color: 'primary',
            //     text: 'NEW'
            // }
        },
        {
            _name: 'CSidebarNavItem',
            name: 'New Request',
            to: '/newrequest',
            fontIcon: 'fa fa-flag-o',
        },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Colors',
        //     to: '/theme/colors',
        //     icon: 'cil-drop'
        // },
        {
            _name: 'CSidebarNavTitle',
            _children: ['Pages']
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Activity',
            fontIcon: 'fa fa-cubes',
            items: [{
                    name: 'All Projects',
                    to: '/activity/all-projects'
                },
                {
                    name: 'All Contracts',
                    to: '/activity/all-contracts'
                },
                {
                    name: 'Reviews',
                    to: '/activity/reviews'
                },
                {
                    name: 'Appointment',
                    to: '/activity/appointments'
                },
            ]
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Purchase Services',
            fontIcon: 'fas fa-sync',
            items: [{
                    name: 'All Services',
                    to: '/purchased-services/all-services'
                },
                {
                    name: 'Sale History',
                    to: '/purchased-services/sale-history'
                },
            ]
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Jobs',
            fontIcon: 'fas fa-graduation-cap',
            items: [{
                    name: 'Search Jobs',
                    to: '/jobs/search-jobs'
                },
                {
                    name: 'Jobs Offers',
                    to: '/jobs/jobs-offers'
                },
            ]
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Marketing',
            fontIcon: 'fa fa-bar-chart-o',
            items: [{
                    name: 'News Letter',
                    to: '/marketing/news-letter'
                },
                {
                    name: 'Popup Settings',
                    to: '/marketing/popup-settings'
                },
                {
                    name: 'Discount',
                    to: '/marketing/discount'
                },
            ]
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Payments',
            fontIcon: 'fa fa-credit-card',
            items: [{
                    name: 'Upfront Request',
                    to: '/payments/upfront-request'
                },
                {
                    name: 'Refund Request',
                    to: '/payments/refund-request'
                },
                {
                    name: 'Release Request',
                    to: '/payments/release-request'
                },
                {
                    name: 'Escrow Accounts',
                    to: '/payments/escrow-accounts'
                },
                {
                    name: 'PayIn / PayOut Accounts',
                    to: '/payments/in-out-accounts'
                },
                {
                    name: 'Payouts',
                    to: '/payments/payouts'
                },
                {
                    name: 'Invoice',
                    to: '/payments/invoice'
                },

            ]
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Customers',
            fontIcon: 'fa fa-users',
            items: [{
                    name: 'Portal Clients',
                    to: '/customers/portal-clients'
                },
                {
                    name: 'Portal Users',
                    to: '/customers/portal-users'
                },
            ]
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Income',
            fontIcon: 'fa fa-money',
            items: [{
                    name: 'Portal Income',
                    to: '/income/portal-income'
                },
                {
                    name: 'Clients Income',
                    to: '/income/clients-income'
                },
            ]
        },
        // Portal Settings 
        {
            _name: 'CSidebarNavDropdown',
            name: 'Portal Settings',
            fontIcon: 'fa fa-gear',
            items: [{
                    name: 'Website Languages',
                    to: '/portal-settings/website-languages'
                },
                {
                    name: 'Website Settings',
                    to: '/portal-settings/website-settings'
                },
                {
                    name: 'Company Type',
                    to: '/portal-settings/company-type'
                },
                {
                    name: 'Add Country',
                    to: '/portal-settings/add-country'
                },
                {
                    name: 'Admin',
                    to: '/portal-settings/admin'
                },
                {
                    name: 'Text Module',
                    to: '/portal-settings/text-module'
                },
                {
                    name: 'Reasons',
                    to: '/portal-settings/reasons'
                },
                {
                    name: 'Policy & Terms',
                    to: '/portal-settings/policy-and-terms'
                },
                {
                    name: 'Our Services',
                    to: '/portal-settings/our-services'
                },
                {
                    name: 'Services Comission',
                    to: '/portal-settings/services-comission'
                },
                {
                    name: 'Account Upgrade Client',
                    to: '/portal-settings/account-upgrade-client'
                },
                {
                    name: 'Company Skills',
                    to: '/portal-settings/company-skills'
                },
                {
                    name: 'Company Character',
                    to: '/portal-settings/company-character'
                },
                {
                    name: 'Bids Amount Client',
                    to: '/portal-settings/bids-amount-client'
                },
            ]
        },


        // {
        //     _name: 'CSidebarNavDivider',
        //     _class: 'm-5'
        // },
        // {
        //     _name: 'CSidebarNavTitle',
        //     _children: ['User']
        // },
        // {
        //     _name: 'CSidebarNavDropdown',
        //     name: 'Pages',
        //     route: '/pages',
        //     icon: 'cil-star',
        //     items: [{
        //             name: 'Login',
        //             to: '/pages/login'
        //         },
        //         {
        //             name: 'Register',
        //             to: '/pages/register'
        //         },
        //         {
        //             name: 'Error 404',
        //             to: '/pages/404'
        //         },
        //         {
        //             name: 'Error 500',
        //             to: '/pages/500'
        //         }
        //     ]
        // },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Logout',
        //     href: '/logout',
        //     fontIcon: 'fa fa-sign-out',
        //     _class: 'bg-success position-absolute w-100 b-0 sidebarLogoutBtn',
        //     // target: '_blank'
        // },
    ]
}]