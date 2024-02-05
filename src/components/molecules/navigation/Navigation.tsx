"use client";

import NavItem from "@/components/ui/navItem/NavItem";
import { cn } from "@/lib/utils";
import styles from "./Navigation.module.css";
import { NAVIGATION } from "@/enums/navigation";

function Navigation() {
  return (
    <nav className='origin-top w-full mt-4 lg:mt-0 hidden lg:flex items-center gap-12 justify-end'>
      <ul className={cn("flex gap-6 flex-row lg:items-center", styles.NavigationList)}>
        <li>
          <NavItem to={NAVIGATION.NOSOTROS} label='Nosotros' />
        </li>
        <li>
          <NavItem to={NAVIGATION.BENEFICIOS} label='Beneficios' />
        </li>
        <li>
          <NavItem to={NAVIGATION.NIVELES} label='Niveles' />
        </li>
        <li>
          <NavItem to={NAVIGATION.PREGUNTAS_FRECUENTES} label='FAQ' />
        </li>
        <li>
          <a
            className='lg:text-lg text-primary font-semibold cursor-pointer'
            href='https://app.instakash.net'
            target='_blank'
            rel='noreferrer'
          >
            Acceder
          </a>
        </li>
        <li>
          <a
            className='text-sm lg:text-lg p-3 px-6 text-white bg-primary rounded-sm font-semibold text-center cursor-pointer'
            href='https://app.instakash.net/register'
            target='_blank'
            rel='noreferrer'
          >
            Registrarte
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
