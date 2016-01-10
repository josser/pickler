"use strict";

import React, { Component } from "react";
import styles from "styles/treeview.scss";

export default class TreeView extends Component {

  render() {
    return (
      <div className="treeview">
      <ul>
       <li><input type="checkbox" id="item-0" /><label htmlFor="item-0">This Folder is Closed By Default</label>
           <ul>
               <li><input type="checkbox" id="item-0-0" /><label htmlFor="item-0-0">Ooops! A Nested Folder</label>
                   <ul>
                       <li><input type="checkbox" id="item-0-0-0" /><label htmlFor="item-0-0-0">Look Ma - No Hands!</label>
                           <ul>
                               <li><a>First Nested Item</a></li>
                               <li><a>Second Nested Item</a></li>
                               <li><a>Third Nested Item</a></li>
                               <li><a>Fourth Nested Item</a></li>
                           </ul>
                       </li>
                       <li><a>Item 1</a></li>
                       <li><a>Item 2</a></li>
                       <li><a>Item 3</a></li>
                   </ul>
               </li>
               <li><input type="checkbox" id="item-0-1" /><label htmlFor="item-0-1">Yet Another One</label>
                   <ul>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                   </ul>
               </li>
               <li><input type="checkbox" id="item-0-2" disabled="disabled" /><label htmlFor="item-0-2">Disabled Nested Items</label>
                   <ul>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                   </ul>
               </li>
               <li><a>item</a></li>
               <li><a>item</a></li>
               <li><a>item</a></li>
               <li><a>item</a></li>
       </ul>
</li>
<li><input type="checkbox" id="item-1" defaultChecked="checked" /><label htmlFor="item-1">This One is Open by Default...</label>
       <ul>
           <li><input type="checkbox" id="item-1-0" /><label htmlFor="item-1-0">And Contains More Nested Items...</label>
               <ul>
                   <li><a>Look Ma - No Hands</a></li>
                   <li><a>Another Item</a></li>
                   <li><a>And Yet Another</a></li>
               </ul>
           </li>
           <li><a>Lorem</a></li>
           <li><a>Ipsum</a></li>
           <li><a>Dolor</a></li>
           <li><a>Sit Amet</a></li>
       </ul>
</li>
<li><input type="checkbox" id="item-2" /><label htmlFor="item-2">Can You Believe...</label>
       <ul>
               <li><input type="checkbox" id="item-2-0" /><label htmlFor="item-2-0">That This Treeview...</label>
                   <ul>
                       <li><input type="checkbox" id="item-2-2-0" /><label htmlFor="item-2-2-0">Does Not Use Any JavaScript...</label>
                           <ul>
                               <li><a>But Relies Only</a></li>
                               <li><a>On the Power</a></li>
                               <li><a>Of CSS3</a></li>
                           </ul>
                       </li>
                       <li><a>Item 1</a></li>
                       <li><a>Item 2</a></li>
                       <li><a>Item 3</a></li>
                   </ul>
               </li>
               <li><input type="checkbox" id="item-2-1" /><label htmlFor="item-2-1">This is a Folder With...</label>
                   <ul>
                       <li><a>Some Nested Items...</a></li>
                       <li><a>Some Nested Items...</a></li>
                       <li><a>Some Nested Items...</a></li>
                       <li><a>Some Nested Items...</a></li>
                       <li><a>Some Nested Items...</a></li>
                   </ul>
               </li>
               <li><input type="checkbox" id="item-2-2" disabled="disabled" /><label htmlFor="item-2-2">Disabled Nested Items</label>
                   <ul>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                       <li><a>item</a></li>
                   </ul>
               </li>
           </ul>
       </li>
   </ul>
      </div>
    );
  }

}
