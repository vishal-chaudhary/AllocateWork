using System.Web;
using System.Web.Optimization;

namespace AlloCat.Web.UI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/lib/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/lib/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts//lib/angular.js",
                        "~/Scripts/lib/angular-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/jquery.css",
                      "~/Content/pages.min.css",
                      "~/Content/pixel-admin.min.css",
                      "~/Content/responsive.css",
                      "~/Content/rtl.min.css",
                      "~/Content/style.css",
                      "~/Content/themes.min.css",
                      "~/Content/widgets.min.css",
                      "~/Content/Site.css"));
        }
    }
}
