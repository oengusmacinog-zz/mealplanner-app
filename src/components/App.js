import React from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import Header from './Header';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className='recipe-nav left-pane'>
          <Nav
            groups={
              [
                {
                  links:
                  [
                    { name: 'Recipe #1', url: '#' },
                    { name: 'Recipe #2', url: '#' }
                  ]
                }
              ]
            }
          />
        </div>
        <div className='main-cnt right-pane'>
          <Header tagline='What are you going to eat?'/>
          <DocumentCard onClickHref='http://bing.com'>
            <DocumentCardPreview
              previewImages={ [
                {
                  previewImageSrc: require('../images/documentpreview.png'),
                  iconSrc: require('../images/iconppt.png'),
                  width: 318,
                  height: 196,
                  accentColor: '#ce4b1f'
                }
              ] }
            />
            <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx'/>
            <DocumentCardActivity
              activity='Created Feb 23, 2016'
              people={
                [
                  { name: 'Kat Larrson', profileImageSrc: require('../images/avatarkat.png') }
                ]
              }
              />
          </DocumentCard>
        </div>
      </div>
    )
  }
}

export default App;
