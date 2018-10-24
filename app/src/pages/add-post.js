import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { Row, Col, Input, Button, Tag, message } from 'antd'
import _ from 'lodash'

import { addPost } from '../reducers/actions'

const { TextArea } = Input

class AddPost extends Component {
  state = {
    tags: [],
    tagValue: '',
    titleValue: '',
    descriptionValue: '',
    error: false,
    send: false
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { tags, titleValue: title, descriptionValue: description } = this.state
    if (tags.length > 0 && title && description) {
      this.props.addPost({
        title,
        description,
        tags
      })
      this.setState({ error: false, send: true })
      setTimeout(() => Router.push('/'), 1000) 
    } else {
      this.setState({ error: true })
    }
  }

  addTag = () => {
    if (this.state.tagValue) {
      this.setState({
        tags: [...this.state.tags, this.state.tagValue],
        tagValue: ''
      })
    }
  }

  removeTag = (index) => {
    let newTags = this.state.tags
    newTags.splice(index, 1)
    this.setState({
      tags: [ ...newTags ]
    })
  }

  handleChangeTag = (event) => {
    this.setState({ tagValue: event.target.value })
  }

  handleChangeTitle = (event) => {
    this.setState({ titleValue: event.target.value })
  }

  handleChangeDescription = (event) => {
    this.setState({ descriptionValue: event.target.value })
  }

  render () {
    return (
      <div>
        <form>
          <Row className='add-post' style={{ marginTop: 50, maxWidth: 1140, margin: 'auto' }}>
            <Col style={{ paddingBottom: 20 }} span={24}>
              { this.state.error && !this.props.save && message.error('Please complete all the fields') }
              { !this.state.error && !this.props.save && this.state.send && 
                message.error('Sorry Something happened, we could not create the post') }
              { this.props.save && !this.state.error && message.success('Congratulations, Post created correctly') }
            </Col>
            <Col xs={24} style={{ padding: 20 }}>
              <Row>
                <p>Title:</p>
                <Input
                  value={this.state.titleValue}
                  onChange={this.handleChangeTitle}
                  name='title'
                  type='text' />
              </Row>
              <Row style={{ marginTop: 20 }}>
                <p>Description:</p>
                <TextArea
                  value={this.state.descriptionValue}
                  onChange={this.handleChangeDescription}
                  name='description'
                  autosize={{ minRows: 2, maxRows: 6 }} />
              </Row>
              <Row style={{ marginTop: 20 }}>
                <p>Tags:</p>
                <Col xs={10}>
                  <Input
                    value={this.state.tagValue}
                    onChange={this.handleChangeTag}
                    name='tags'
                    type='text' />
                  <Row style={{ marginTop: 15 }}>
                    {_.map(this.state.tags, (tag, index) => (
                      <Tag key={index} closable onClose={() => this.removeTag(index)}>{tag}</Tag>
                    ))}
                  </Row>
                </Col>
                <Col xs={14} style={{ paddingLeft: 20 }}>
                  <Button type='primary' style={{ borderRadius: 130 }} onClick={this.addTag} > Add tag </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: 50 }}>
                <Button onClick={this.onSubmit} type='submit' style={{ borderRadius: 130 }}>Save Post</Button>
              </Row>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

AddPost.propTypes = {
  addPost: PropTypes.func,
  post: PropTypes.object,
  save: PropTypes.bool
}

export default connect(
  (state) => state.posts,
  (dispatch) => ({ addPost: (params) => dispatch(addPost(params)) })
)(AddPost)
