import React from "react";

export const NavbarScreen = () => {
  return (
    <>
      <div data-component="navbar">
        <nav class="navbar p-0 fixed-top">
          <button
            class="navbar-toggler navbar-toggler-left rounded-0 border-0"
            type="button"
            data-toggle="collapse"
            data-target="#megamenu-dropdown"
            aria-controls="megamenu-dropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
            <span class="ml-3">Advanced</span>
          </button>

          <div>
            <a class="navbar-brand px-1" href="#">
              <img
                src="http://kris.agentfire2.com/wp-content/mu-plugins/agentfire-shared-library/img/agentfire.svg"
                class="d-inline-block mt-1"
                alt="AgentFire Logo"
                height="40"
              ></a>

              <div class="right-links float-right mr-4">
                <a href="#" class="home">
                  <i class="fa fa-home mr-3"></i>
                </a>

                <div class="d-inline dropdown rounded-0 mx-3">
                  <a
                    class="dropdown-toggle"
                    id="tools"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                  >
                    <i class="fa fa-wrench" aria-hidden="true"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right rounded-0 text-center"
                    aria-labelledby="tools"
                  >
                    <a class="dropdown-item px-2" href="#">
                      Recompile CSS
                    </a>
                  </div>
                </div>

                <div class="d-inline dropdown mr-3">
                  <a
                    class="dropdown-toggle"
                    id="notifications"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                  >
                    <span>10</span>
                    <i class="fa fa-bell"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right rounded-0 pt-0"
                    aria-labelledby="notifications"
                  >
                    <div class="list-group">
                      <div class="lg">
                        <a
                          href="#"
                          class="list-group-item list-group-item-action flex-column align-items-start active"
                        >
                          <h5 class="mb-1">
                            Real Estate Marketing Automation: 6 Simple Systems
                          </h5>
                          <p class="mb-0">17 October 2016 | 9:32 pm</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-inline dropdown mr-3">
                  <a
                    class="dropdown-toggle"
                    id="messages"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                  >
                    <i class="fa fa-envelope"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right rounded-0 text-center"
                    aria-labelledby="messages"
                  >
                    <a class="dropdown-item">There are no new messages</a>
                  </div>
                </div>

                <div class="d-inline dropdown">
                  <a
                    class="dropdown-toggle"
                    id="messages"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                  >
                    <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right rounded-0"
                    aria-labelledby="messages"
                  >
                    <a class="dropdown-item" href="#">
                      Edit my profile
                    </a>
                    <a class="dropdown-item" href="#">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="megamenu"></div>
          </div>
        </nav>
      </div>


      <div data-component="sidebar">
        <div class="sidebar">
        <ul class="list-group flex-column d-inline-block first-menu">
          <li class="list-group-item pl-3 py-2">
            <a href="#"><i class="fa fa-user-o" aria-hidden="true"><span class="ml-2 align-middle">Reporting</span></i></a>
          </li>
          
          <li class="list-group-item pl-3 py-2">
            <a href="#"><i class="fa fa-user-o" aria-hidden="true"><span class="ml-2 align-middle">rubius</i></a>
              
            </li>
          
          <li class="list-group-item pl-3 py-2">
            <a href="#"><i class="fa fa-user-o" aria-hidden="true"><span class="ml-2 align-middle">Content</span></i></a>
          </li> 
          
          <li class="list-group-item pl-3 py-2">
            <a href="#">
              <i class="fa fa-user-o" aria-hidden="true"><span class="ml-2 align-middle">Engagement</span></i>
            </a>
          </li> 
          
          
          <li class="list-group-item pl-3 py-2">
            <a href="#"><i class="fa fa-user-o" aria-hidden="true"><span class="ml-2 align-middle">Image Center</span></i></a>
          <li/>
          </ul>

      </div> 
      </div>
      

      <div class="wp-content">
        <div class="container-fluid">CONTENT GOES HERE</div>
      </div>
    </>
  );
};
