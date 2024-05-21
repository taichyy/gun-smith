"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

const Navbar = () => {

    const navItems = [{
        title: "商品管理",
        links: [{
            text: "品牌管理",
            link: "/brandsManagement"
        }]
    },{
        title: "商品管理",
        links: [{
            text: "品牌管理",
            link: "/brandsManagement"
        }]
    }]

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navItems.map( (item, index) => (
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                {item.links.map( (link,index) => (
                                    <Link href={link.link} key={index} className="whitespace-nowrap px-4 py-2">
                                        {link.text}
                                    </Link>
                                ))}
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
 
export default Navbar;