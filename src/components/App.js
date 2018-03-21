import React from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import Header from './Header';

class App extends React.Component {

  render() {
    return (
      <div>
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
    )
  }
}

export default App;
