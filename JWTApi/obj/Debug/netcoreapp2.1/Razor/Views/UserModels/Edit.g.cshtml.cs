#pragma checksum "d:\Formations\JWTsDemo\JWTApi\Views\UserModels\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6ae4d7a3c3a6f77777a9cc7a7b4612e05281573e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_UserModels_Edit), @"mvc.1.0.view", @"/Views/UserModels/Edit.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/UserModels/Edit.cshtml", typeof(AspNetCore.Views_UserModels_Edit))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6ae4d7a3c3a6f77777a9cc7a7b4612e05281573e", @"/Views/UserModels/Edit.cshtml")]
    public class Views_UserModels_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<JWTApi.Model.UserModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(31, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "d:\Formations\JWTsDemo\JWTApi\Views\UserModels\Edit.cshtml"
  
    ViewData["Title"] = "Edit";

#line default
#line hidden
            BeginContext(73, 1617, true);
            WriteLiteral(@"
<h2>Edit</h2>

<h4>UserModel</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Edit"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <input type=""hidden"" asp-for=""Id"" />
            <div class=""form-group"">
                <label asp-for=""FirstName"" class=""control-label""></label>
                <input asp-for=""FirstName"" class=""form-control"" />
                <span asp-validation-for=""FirstName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""LastName"" class=""control-label""></label>
                <input asp-for=""LastName"" class=""form-control"" />
                <span asp-validation-for=""LastName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""UserName"" class=""control-label""></label>
                <input asp-for=""UserName"" class=""form-control"" />
                <span as");
            WriteLiteral(@"p-validation-for=""UserName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Password"" class=""control-label""></label>
                <input asp-for=""Password"" class=""form-control"" />
                <span asp-validation-for=""Password"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Save"" class=""btn btn-default"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(1708, 2, true);
                WriteLiteral("\r\n");
                EndContext();
#line 48 "d:\Formations\JWTsDemo\JWTApi\Views\UserModels\Edit.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<JWTApi.Model.UserModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
