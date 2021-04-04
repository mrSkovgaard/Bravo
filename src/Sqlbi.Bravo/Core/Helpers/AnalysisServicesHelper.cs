﻿using Sqlbi.Bravo.Client.AnalysisServicesEventWatcher;
using System;
using System.Data.Common;
using System.IO;
using System.Xml;

namespace Sqlbi.Bravo.Core.Helpers
{
    internal static class AnalysisServicesHelper
    {
        public static WatcherEvent GetEventType(this string xmla)
        {
            if (xmla == null)
                return WatcherEvent.Unknown;

            using var stringReader = new StringReader(xmla);
            using var xmlReader = XmlReader.Create(stringReader);

            while (xmlReader.Read())
            {
                if (xmlReader.NodeType == XmlNodeType.Element)
                {
                    var name = xmlReader.Name;

                    if (nameof(WatcherEvent.Create).Equals(name, StringComparison.OrdinalIgnoreCase))
                        return WatcherEvent.Create;

                    if (nameof(WatcherEvent.Delete).Equals(name, StringComparison.OrdinalIgnoreCase))
                        return WatcherEvent.Delete;

                    if (nameof(WatcherEvent.Alter).Equals(name, StringComparison.OrdinalIgnoreCase))
                        return WatcherEvent.Alter;
                }
            }

            return WatcherEvent.Unknown;
        }

        public static string BuildConnectionString(string serverName, string databaseName)
        {
            const string ProviderKey = "Provider";
            const string DataSourceKey = "Data Source";
            const string InitialCatalogKey = "Initial Catalog";
            const string IntegratedSecurityKey = "Integrated Security";
            const string PersistSecurityInfoKey = "Persist Security Info";
            const string ApplicationNameKey = "Application Name";

            var builder = new DbConnectionStringBuilder(useOdbcRules: false)
            {
                { ProviderKey, "MSOLAP" },
                { DataSourceKey, serverName },
                { InitialCatalogKey, databaseName },
                { IntegratedSecurityKey, "SSPI" },
                { PersistSecurityInfoKey, "True" },
                { ApplicationNameKey, AppConstants.ApplicationInstanceUniqueName }
            };

            return builder.ConnectionString;
        }
    }
}
