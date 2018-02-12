import React from "react";

const Nav = () =>
<nav class="nav-extended">
<div class="nav-wrapper">
  <a href="#" class="brand-logo">Logo</a>
  <a href="#" data-activates="mobile-demo" class="button-collapse">
    <i class="material-icons">menu</i>
  </a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
      <a href="badges.html">How It Works</a>
    </li>
    <li>
      <a href="collapsible.html">Sign Out
      </a>
    </li>
  </ul>
  <ul class="side-nav" id="mobile-demo">
    <li>
      <a href="badges.html">How It Works</a>
    </li>
    <li>
      <a href="collapsible.html">Sign Out</a>
    </li>
  </ul>
</div>
<div class="nav-content">
  <ul class="tabs tabs-transparent">
    <li class="tab">
      <a href="#test0">Home</a>
    </li>
    <li class="tab">
      <a class="active" href="#test1">Rent Reminder</a>
    </li>
    <li class="tab">
      <a href="#test2">Post Announcement</a>
    </li>
    <li class="tab">
      <a href="#test3">View Repair Tickets</a>
    </li>
    <li class="tab">
      <a href="#test4">Collect Money</a>
    </li>
  </ul>
</div>
</nav>

export default Nav;
