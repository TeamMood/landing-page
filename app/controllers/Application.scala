package controllers

import play.api._
import play.api.mvc._
import play.api.i18n.Lang
import play.api.i18n.MessagesPlugin
import play.api.i18n.Messages

object Application extends Controller {

  def index = Action { request =>
    {
      // FIXME : there could be a better way to manage i18n
      Ok(views.html.index(Lang.preferred(request.acceptLanguages)(Play.current)))
    }
  }

}