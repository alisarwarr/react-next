//REACT-ROUTER-DOM
import { createBrowserRouter } from "react-router-dom";
//PAGES
import {
    Home,
    Orders,
    Products,
    Drafts,
    Wallet,
    Support,
    Tutorials,
    Error,
    // BusinessTools
    BusinessTools,
    SupplierSettings,
    Automations,
    Templates,
    Keywords,
    PlansAndAddOns,
    AccountAndBilling,
    Users,
    BuyerAccounts,
    Notifications,
    StoreSettings
} from "../pages";
//LAYOUTS
import Layout from "../components/layouts/Layout";
//COMPONENTS
import Lazy from "./Lazy";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Lazy children={<Layout />} />,
        children: [
            { path: "/", element: <Lazy children={<Home />} /> },
            { path: "/orders", element: <Lazy children={<Orders />} /> },
            { path: "/products", element: <Lazy children={<Products />} /> },
            { path: "/drafts", element: <Lazy children={<Drafts />} /> },
            { path: "/wallet", element: <Lazy children={<Wallet />} /> },
            { path: "/support", element: <Lazy children={<Support />} /> },
            { path: "/tutorials", element: <Lazy children={<Tutorials />} /> },
            // BusinessTools
            { path: "/business-tools", element: <Lazy children={<BusinessTools />} /> },
            { path: "/business-tools/supplier-settings", element: <Lazy children={<SupplierSettings />} /> },
            { path: "/business-tools/automations", element: <Lazy children={<Automations />} /> },
            { path: "/business-tools/keywords", element: <Lazy children={<Keywords />} /> },
            { path: "/business-tools/plans-and-addons", element: <Lazy children={<PlansAndAddOns />} /> },
            { path: "/business-tools/account-and-billing", element: <Lazy children={<AccountAndBilling />} /> },
            { path: "/business-tools/templates", element: <Lazy children={<Templates />} /> },
            { path: "/business-tools/users", element: <Lazy children={<Users />} /> },
            { path: "/business-tools/buyer-accounts", element: <Lazy children={<BuyerAccounts />} /> },
            { path: "/business-tools/notifications", element: <Lazy children={<Notifications />} /> },
            { path: "/business-tools/store-settings", element: <Lazy children={<StoreSettings />} /> }
        ],
    },
    {
        path: "*",
        element: <Lazy children={<Error />} />
    },
]);