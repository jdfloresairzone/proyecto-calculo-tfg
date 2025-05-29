
export default function Header() {
return (
    <div className="h-24 w-full bg-white lg:relative">
      <div className="container mx-auto flex h-full justify-between lg:gap-10">
        
        <figure className="flex items-center justify-center p-5 lg:flex-none">
            <a href="https://airzonecontrol/ib/es/" target="_self">
                  <img src="https://res.cloudinary.com/airzone/image/upload/v1707306077/images/airzone.svg" alt="Airzone logo" width={200} height={50} />
            </a>
        </figure>

          <DropDown
            trigger={
              <div className="text-primary-900 border-primary-900 flex shrink-0 items-center rounded-lg border p-2">
                {isLogged && avatar != undefined && avatar != "" ? (
                  <img className="mr-1 h-5 w-5 rounded-full" src={avatar} alt={`${session.user?.name} - avatar`}></img>
                ) : (
                  <Icon name={IconData.profileSolid} size={28} />
                )}
                {isLogged ? (
                  <span className="pl-2">{`${translate("menuHeader.formLogin.greet")}${session.user.name}`}</span>
                ) : (
                  <></>
                )}
              </div>
            }
            align="left"
            isDisplayed={loginIsDisplayed} // Por aquí pasa el estado del padre al hijo
            onDisplayChange={setLoginIsDisplayed}
          >
            <div className="max-w-screen sm:w-116 absolute right-0 top-4 w-screen px-4 pt-4 sm:p-0">
              {isLogged ? (
                <MenuProfile
                  groups={groups}
                  logoutText={translate("menuHeader.logout")}
                  onLogout={handleLogout}
                  isLoading={isLoading}
                  onClose={() => setLoginIsDisplayed(false)}
                />
              ) : (
                <Login
                  emailLabel={translate("menuHeader.formLogin.email")}
                  forgotPasswordLink={`${process.env.NEXT_PUBLIC_AZC_LOGIN_URL}es/password/reset`}
                  forgotPasswordText={translate("menuHeader.formLogin.reset")}
                  loginText={translate("menuHeader.formLogin.login")}
                  onSubmit={handleLogin}
                  passwordLabel={translate("menuHeader.formLogin.password")}
                  rememberLabel={translate("menuHeader.formLogin.remember")}
                  signUpLink={azcPath + "/register/"}
                  signUpText={translate("menuHeader.formLogin.create")}
                  isLoading={isLoading}
                  onClose={() => setLoginIsDisplayed(false)}
                  isFixed
                  requiredTranslation={translate("form.validation.required")}
                  emailTranslation={translate("form.validation.email")}
                />
              )}
            </div>
          </DropDown>
          <LanguageSelector value={language} options={availableLanguages} onChange={handleLanguageChange} />
        </div>
      </div>
    </div>
  )
}