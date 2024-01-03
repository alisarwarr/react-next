//ICONS
import {
    Dashboard,
    Orders,
    Products,
    Drafts,
    Wallet,
    Support,
    Tutorials,
    SupplierSettings,
    Automations,
    Templates,
    Keywords,
    PlansNAddOns,
    AccountNBilling,
    Users,
    BuyerAccounts,
    Notifications,
    StoreSettings,
} from "./icons";


export interface DrawerOption {
    name: string;
    icon: (color: string) => JSX.Element;
    url: string | null;
    active: boolean;
    options: DrawerOption[];
    disable?: boolean;
}
interface Drawer {
    type: string | null
    options: DrawerOption[]
}


export const drawer: Drawer[] = [
    {
        type: null,
        options: [
            {
                name: "Dashboard",
                icon: Dashboard,
                url: "/",
                active: false,
                options: []
            },
            {
                name: "Orders",
                url: "/orders",
                icon: Orders,
                active: false,
                options: []
            },
            {
                name: "Products",
                icon: Products,
                url: "/products",
                active: false,
                options: []
            },
            {
                name: "Business Tools",
                icon: Orders,
                url: null,
                active: false,
                options: [
                    {
                        name: "Supplier Settings",
                        icon: SupplierSettings,
                        url: "/business-tools/supplier-settings",
                        active: false,
                        options: []
                    },
                    {
                        name: "Automations",
                        icon: Automations,
                        url: "/business-tools/automations",
                        active: false,
                        options: []
                    },
                    {
                        name: "Templates",
                        icon: Templates,
                        url: "/business-tools/templates",
                        active: false,
                        options: []
                    },
                    {
                        name: "Keywords",
                        icon: Keywords,
                        url: "/business-tools/keywords",
                        active: false,
                        options: []
                    },
                    {
                        name: "Plans & Add-ons",
                        icon: PlansNAddOns,
                        url: "/business-tools/plans-and-addons",
                        active: false,
                        options: []
                    },
                    {
                        name: "Account & Billing",
                        icon: AccountNBilling,
                        url: "/business-tools/account-and-billing",
                        active: false,
                        options: []
                    },
                    {
                        name: "Users",
                        icon: Users,
                        url: "/business-tools/users",
                        active: false,
                        options: []
                    },
                    {
                        name: "Buyer Accounts",
                        icon: BuyerAccounts,
                        url: "/business-tools/buyer-accounts",
                        active: false,
                        options: []
                    },
                    {
                        name: "Notifications",
                        icon: Notifications,
                        url: "/business-tools/notifications",
                        active: false,
                        options: []
                    },
                    {
                        name: "Store Settings",
                        icon: StoreSettings,
                        url: "/business-tools/store-settings",
                        active: false,
                        options: []
                    },
                ],
            },
            {
                name: "Drafts",
                icon: Drafts,
                url: "/drafts",
                active: false,
                options: []
            },
            {
                name: "Wallet",
                icon: Wallet,
                url: "/wallet",
                active: false,
                options: []
            },
            {
                name: "Support",
                icon: Support,
                url: "/support",
                active: false,
                options: []
            },
            {
                name: "Tutorials",
                icon: Tutorials,
                url: "/tutorials",
                active: false,
                options: []
            }
        ]
    }
];