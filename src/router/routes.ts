import landingpage from '../views/landingpage.vue';

// united
import unitedPage from '../views/united/unitedPage.vue';

// fashion
import fashionPage from '../views/fashion/fashionPage.vue';
import uniquePage from '../views/fashion/uniquePage.vue';
import freshupPage from '../views/fashion/freshupPage.vue';
import smartPrepPage from '../views/fashion/smartPrepPage.vue';

// service
import servicePage from '../views/service/servicePage.vue';

// work
import workIndexPage from '../views/work/workIndexPage.vue';
import workPage from '../views/work/workPage.vue';
import approachPage from '../views/work/approachPage.vue';
import productsPage from '../views/work/productsPage.vue';
import projectsPage from '../views/work/projectsPage.vue';

// blog
import blogPage from '../views/blog/blogPage.vue';
import blogPostOne from '../views/blog/blogPostOne.vue';
import blogPostTwo from '../views/blog/blogPostTwo.vue';
import blogPostThree from '../views/blog/blogPostThree.vue';

// contact
import contactPage from '../views/contact/contactPage.vue';




const routes = [
    { path: '/', component: landingpage },
    { path: '/united', component: unitedPage },
    { 
        path: '/fashion',
        component: fashionPage,
        name: 'fashion-page',
        children: [
            {
                path: 'unique',
                component: uniquePage,
                name: 'fashion-unique-page'
            },
            {
                path: 'freshup',
                component: freshupPage,
                name: 'fashion-freshup-page'
            },
            {
                path: 'smartprep',
                component: smartPrepPage,
                name: 'fashion-smartprep-page'
            }
        ]
        
    },
    {
        path: '/service',
        component: servicePage,
        name: 'service-page'
    },
    {
        path: '/work',
        component: workIndexPage,
        name: 'work-page',
        children: [
            {
                path: '/',
                component: workPage,
                name: 'workpage'
            },
            {
                path: 'products',
                component: productsPage,
                name: 'work-products-page'
            },
            {
                path: 'projects',
                component: projectsPage,
                name: 'work-projects-page'
            },
            {
                path: 'approach',
                component: approachPage,
                name: 'work-approach-page'
            }
        ]
    },
    {
        path: '/blog',
        component: blogPage,
        name: 'blog-page',
        children: [
            {
                path: '/one',
                component: blogPostOne,
                name: 'blog-post-one-page'
            },
            {
                path: '/two',
                component: blogPostTwo,
                name: 'blog-post-two-page'
            },
            {
                path: '/three',
                component: blogPostThree,
                name: 'blog-post-three-page'
            }
        ]
    },
    {
        path: '/contact',
        component: contactPage,
        name: 'contact-page'
    }
];

export default routes;