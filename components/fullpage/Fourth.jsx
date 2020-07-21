import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";
import './Fourth.scss'
import Loading from '../loading/Loading'

const Fourth = withNavigationContext(({ fullpage }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  let url = 'https://cmsbackend.herokuapp.com/articles/'

  useEffect(() => {
    async function fetchData() {
      let result = await fetch(url);
      let data = await result.json()
      setData(data);
      setLoading(false)
    }
    fetchData();
  }, []);

  return (
    <Page>
      <Section wrapper={true} backgroundColor='#292c35'>
        <Background src="https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9" />
        <div className="grid-container" style={{ width: 'auto', paddingTop: '20vh', paddingLeft: '15vh' }}>
          {loading ? <Loading /> : (data.map((data_item, index) => {
              let string = data_item.content
              let string_array = string.split('SPLIT');
              let text = string_array[0]
              let url = string_array[1]

              return (
                <div className="grid-item" style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <p className='card_title' style={{
                    justifyContent: 'flex-start',
                    fontFamily: 'monospace',
                    color: 'pink',
                    justifyItems: 'center',
                    textAlign: 'center',
                    margin: 10,
                    fontSize: 20,
                    zIndex: 1
                  }}>
                    {data_item.title}
                  </p>
                  <img className='card_image' src={data_item.image.formats.large.url} />
                  <p className='card_title'
                    style={{
                      fontFamily: 'monospace',
                      color: 'lightblue',
                      justifyItems: 'center',
                      textAlign: 'center',
                      margin: 15,
                      fontSize: 15,
                      zIndex: 1
                    }}
                  >
                    {`${text} `}
                    <a alt={'A Link to the Project'} style={{ zIndex: 1, color: 'hotpink', fontSize: 15 }} href={url} target="_blank">{'#Link'}</a>
                  </p>
                </div>
              )})
          )}


        </div>
      </Section>
    </Page>
  )
});

export default Fourth
