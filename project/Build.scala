import sbt._
import sbt.Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "teammood-lp"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    "com.github.ndeverge" %% "autoping-play2-plugin" % "0.1.0-SNAPSHOT"
  )


  val main = play.Project(appName, appVersion, appDependencies).settings(
     resolvers += Resolver.url("Autoping repository", url("http://ndeverge.github.com/autoping-play2-plugin/snapshots/"))(Resolver.ivyStylePatterns),

       javacOptions ++= Seq("-source", "1.7", "-target", "1.7"),

       scalacOptions += "-target:jvm-1.7"
  )

}
