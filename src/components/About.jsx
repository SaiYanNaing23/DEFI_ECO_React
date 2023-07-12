import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';



const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
        <div className='max-w-[1240px] mx-auto py-16'>
            <div>
            <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
            <p className='py-4 text-xl'>
                The Defi protocol system empowers developers, liquidity providers,
                and traders to participate in a financial marketplace that is open
                and accessible to all.
            </p>

            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4'>
                {/* Card */}
                <AboutCard icons={<SiHiveBlockchain size={30} />} title="Reliable, tamper-proof network" message = "Use decentralization, trusted nodes, premium data, and crytographic proofs to connext highly accurate and available data/APIs to any smart contract"/>

                {/* Card */}
                <AboutCard icons={<SiStrapi size={30} />} title="Seamless connection to any API" message = 'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'/>

                {/* Card */}
                <AboutCard icons={<SiFsecure size={30} />} title='Proven, ready-made solutions' message = 'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'/>

                {/* Card */}
                <AboutCard icons={<VscServerProcess size={30} />} title='Secure off-chain computation' message = 'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'/>
            </div>
            <button className='mt-16 uppercase'>Use Defi</button>
            </div>
        </div>
    </div>
  )
}

export default About;