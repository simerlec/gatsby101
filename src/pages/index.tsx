import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <Header headerText="Hi people" />
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br />
        <br />
        <Link to="/about/">Go to About</Link>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
