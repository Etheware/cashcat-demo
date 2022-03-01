import React from 'react'
import Channel from '../channel/Channel';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h4>Top Streamers</h4>
                <Channel avatar="https://yt3.ggpht.com/0P0lCcGXEU_lbl91j2R8n5POp_rO1JusSYEQ-cVWAC7hDBjttIpqqlLd5QQagKKAw7-F8GL7830=s176-c-k-c0x00ffffff-no-rj"
                    name='Crystal Badu'
                    followers='1.2M' 
                />
                <Channel avatar="https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj"
                    name='Pewdiepie'
                    followers='111M' 
                />
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLT6IfoknnVdHMm8_k0pHJtUdZsWunyk1NIM1XKs4A=s176-c-k-c0x00ffffff-no-rj"
                    name='Jake Paul'
                    followers='20.4M' 
                />
                <Channel avatar="https://yt3.ggpht.com/U3o_6d3XVJcHMLq-oSGcI_CaZpqkp5MtJ9A4tklpDrZxH2d-jdMQU-rUANNxoP7cb--gatoifQ=s176-c-k-c0x00ffffff-no-rj"
                    name='Emma Chamberlain'
                    followers='11.2M' 
                />
                <h4>Recommeded</h4>
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLQ7ifSTYlkDSZ0AIfHhymKJnohhgeVt9rBlSi52lg=s176-c-k-c0x00ffffff-no-rj"
                    name='Tame Impala'
                    followers='1.2M' 
                />
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLQ5di8PRC-33juzQgexaNvGqtJJcVsev5Jbsw7KkWQ=s176-c-k-c0x00ffffff-no-rj"
                    name='Vevo'
                    followers='20M' 
                />
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLRyWY4Aw-ykOuWUHOtXJ3SbT7lj1fp8OBskSqlRow=s176-c-k-c0x00ffffff-no-rj"
                    name='Louis Vuitton'
                    followers='20.4M' 
                />
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLRl95Pc8pqXvViGvJnRZq-cJ0lTDMztFr5VElo-5Q=s176-c-k-c0x00ffffff-no-rj"
                    name='Mac Miller'
                    followers='3.8M' 
                /> 
                <h4>Live Now</h4>
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLQ7ifSTYlkDSZ0AIfHhymKJnohhgeVt9rBlSi52lg=s176-c-k-c0x00ffffff-no-rj"
                    name='Tame Impala'
                    followers='1.2M' 
                />
                <Channel avatar="https://yt3.ggpht.com/ytc/AKedOLS6xVo_f9RHSZnTZQbq5HvPm5OQhVYZCNz6RSTHjw=s176-c-k-c0x00ffffff-no-rj"
                    name='Mr.Beast Gaming'
                    followers='24.8M' 
                />
                <Channel avatar="https://yt3.ggpht.com/nCMHKdzJCDlE5uX_9HplknQdYgrKEs3yZMSQNx2yYs8gRA05NJAZQAe8TMNpna_EEIaKx6FR=s176-c-k-c0x00ffffff-no-rj"
                    name='Coldplay'
                    followers='24.8M' 
                />
                <p className='sidebar__topShowMore'>Show More</p>
            </div>
        </div>
    )
}

export default Sidebar
