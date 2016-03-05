'use strict';

var Icon = require('react-native-vector-icons/FontAwesome');
var React = require('react-native')
var Button = require('../Components/Button');
var styles = require('../Styles/style');
var Actions = require('react-native-router-flux').Actions;
var i18n = require('../i18n.js');

import { connect } from 'react-redux';

var {
    SwitchIOS,
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} = React

var ControlPanel = React.createClass({
    selectMenu(selectedAction){
      // route to page
      this.props.close();
      selectedAction();
      // close drawer
    },


    render(){
        return (
            <View style={cstyles.container}>
              <View style={cstyles.header}>
                <Icon style={cstyles.icon} name="user" size={30} />
                <Text style={cstyles.headerText} >{this.props.currentUser} Doddy</Text>
              </View>
              <View style={cstyles.menuList}>
                <TouchableHighlight
                      style={cstyles.menu}
                      underlayColor="rgba(50, 105, 69, 0.4)"
                      onPress={() => this.selectMenu(Actions.home)}>
                      <View style={cstyles.row}>
                        <Icon style={cstyles.icon} name="home" size={25} />
                        <Text style={cstyles.text}> {i18n.home} </Text>
                      </View>
                </TouchableHighlight>
                <TouchableHighlight
                      style={cstyles.menu}
                      underlayColor="rgba(50, 105, 69, 0.4)"
                      onPress={() => this.selectMenu(Actions.task)}>
                      <View style={cstyles.row}>
                        <Icon style={cstyles.icon} name="tasks" size={25} />
                        <Text style={cstyles.text}> {i18n.taskList} </Text>
                      </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={cstyles.menu}
                    underlayColor="rgba(50, 105, 69, 0.4)"
                    onPress={() => this.selectMenu(Actions.approvalList)}>
                    <View style={cstyles.row}>
                      <Icon style={cstyles.icon} name="check" size={25} />
                      <Text style={cstyles.text}> {i18n.approvalList} </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={cstyles.menu}
                    underlayColor="rgba(50, 105, 69, 0.4)"
                    onPress={() => this.selectMenu(Actions.setting)}>
                    <View style={cstyles.row}>
                      <Icon style={cstyles.icon} name="sliders" size={25} />
                      <Text style={cstyles.text}> {i18n.setting} </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                   style={cstyles.menu}
                   underlayColor="rgba(50, 105, 69, 0.4)"
                   onPress={() => this.selectMenu(Actions.map)}>
                   <View style={cstyles.row}>
                     <Icon style={cstyles.icon} name="map" size={25} />
                     <Text style={cstyles.text}> {i18n.map} </Text>
                   </View>
                 </TouchableHighlight>
                 <TouchableHighlight
                    style={cstyles.menu}
                    underlayColor="rgba(50, 105, 69, 0.4)"
                    onPress={() => this.selectMenu(Actions.camera)}>
                    <View style={cstyles.row}>
                      <Icon style={cstyles.icon} name="camera" size={25} />
                      <Text style={cstyles.text}> {i18n.camera} </Text>
                    </View>
                 </TouchableHighlight>
                 <TouchableHighlight
                     style={cstyles.menu}
                     underlayColor="rgba(50, 105, 69, 0.4)"
                     onPress={Actions.logout}>
                     <View style={cstyles.row}>
                       <Icon style={cstyles.icon} name="unlock" size={25} />
                       <Text style={cstyles.text}> {i18n.logout} </Text>
                     </View>
                </TouchableHighlight>
              </View>
            </View>
        )
    }
})

var cstyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: '#78B8DF',
    height: 240,
    padding: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 30,
    color: '#fff'
  },
  menuList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  menu: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 55,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#0f0f0f',
  },
  icon: {
    textAlign: 'center',
    marginRight: 10,
    width: 25,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: '#0f0F0f'
  },
});

// var mapStateToProps = function(state) {
//   //console.log("Mapping Current User", state);
//   //var curState = state.toJS();
//   return {
//     currentUser: state.get('currentUser'),//state.currentUser,
//     //currentUser: state.currentUser,
//   };
//
// };
//
// var mapDispatchToProps = function (dispatch) {
//   return {
//   };
//
// };

//module.exports = connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
module.exports = ControlPanel;
