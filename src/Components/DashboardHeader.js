import React, { useEffect, useState, Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { getUsers } from "../firebase-config";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardHeader() {

    const [ userInfo, setUserInfo] = useState([{}]);
    const userInformation = async () => {
        const response = await getUsers();
        setUserInfo(response);
    };
    useEffect(() => {
        userInformation();

    }, [])
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Hey, {userInfo[0].fullName}
        </h2>
      </div>

    </div>
  )
}