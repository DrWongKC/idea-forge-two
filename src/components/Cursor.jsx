// Source: https://github.com/steveruizok/perfect-cursors

import * as React from "react";
import { usePerfectCursor } from "../hooks/useCursor";

export function Cursor({ userId, point }) {
  const rCursor = React.useRef(null);

  const animateCursor = React.useCallback((point) => {
    const elm = rCursor.current;
    if (!elm) return;
    elm.style.setProperty(
      "transform",
      `translate(${point[0]}px, ${point[1]}px)`
    );
  }, []);

  const onPointMove = usePerfectCursor(animateCursor);

  React.useLayoutEffect(() => onPointMove(point), [onPointMove, point]);

  return (
    <svg
      ref={rCursor}
      style={{
        position: "absolute",
        top: -15,
        left: -15,
        width: 55,
        height: 55,
      }}
      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 3000 3000"
    >
      <path
        fillRule="nonzero"
        fill="rgb(52.146912%, 85.9375%, 44.700623%)"
        fillOpacity="1"
        d="M 2117.710938 2277.449219 C 2251.609375 2290.28125 2389.539062 2256.5 2502.359375 2183.25 C 2514.308594 2175.488281 2527.140625 2165.371094 2528.070312 2151.148438 C 2529.5 2129.289062 2503.878906 2117.628906 2487.628906 2102.929688 C 2459.730469 2077.691406 2457.050781 2035.878906 2448.960938 1999.140625 C 2430.03125 1913.140625 2367.140625 1835.871094 2283.429688 1808.519531 C 2199.71875 1781.179688 2098.339844 1809.980469 2048.398438 1882.511719 C 2008.21875 1940.851562 2004.21875 2018.199219 2021.589844 2086.878906 C 2038.960938 2155.550781 2075.410156 2217.628906 2117.710938 2277.449219 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(68.554688%, 90.234375%, 63.867188%)"
        fillOpacity="1"
        d="M 640.398438 2180.691406 C 981.878906 2282.800781 1351.671875 2288.371094 1696.070312 2196.578125 C 2040.46875 2104.789062 2358.441406 1915.921875 2603.800781 1657.398438 C 2554.269531 1662.75 2506.101562 1639.261719 2465.238281 1610.78125 C 2424.371094 1582.300781 2387.070312 1547.960938 2342.089844 1526.539062 C 2255.269531 1485.199219 2151.128906 1498.050781 2062.011719 1534.148438 C 1972.890625 1570.25 1894.269531 1627.488281 1811.738281 1676.828125 C 1511.328125 1856.429688 1159.851562 1930.609375 812.308594 1972.148438 C 759.691406 1978.441406 703.660156 1985.410156 662.921875 2019.300781 C 622.191406 2053.199219 608.339844 2124.5 640.398438 2180.691406 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(52.146912%, 85.9375%, 44.700623%)"
        fillOpacity="1"
        d="M 325.851562 1683.148438 C 232.238281 1683.640625 138.570312 1666.199219 51.832031 1631.191406 C 117.53125 1758.429688 232.328125 1859.511719 369.039062 1909.230469 C 396.949219 2034.78125 431.871094 2158.769531 474.328125 2280.410156 C 565.269531 2315.648438 669.121094 2316.351562 759.289062 2282.648438 C 766.941406 2266.5 762.410156 2247.359375 756.300781 2230.558594 C 750.191406 2213.761719 742.488281 2196.628906 743.800781 2177.28125 C 740.960938 2118.980469 752.519531 2060.03125 786.910156 2013.691406 C 615.25 1943.5 460.550781 1832.179688 325.851562 1683.148438 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(52.146912%, 85.9375%, 44.700623%)"
        fillOpacity="1"
        d="M 1725.238281 1956.820312 C 1749.910156 2053.648438 1774.589844 2150.46875 1799.261719 2247.300781 C 1806.429688 2275.441406 1815.140625 2305.910156 1838.730469 2322.851562 C 1857.71875 2336.480469 1882.539062 2338.359375 1905.921875 2338.488281 C 1997.949219 2338.96875 2090.03125 2319.339844 2168.660156 2286.101562 C 2198.789062 2271.859375 2225.660156 2250.78125 2246.671875 2224.921875 C 2212.210938 2184.441406 2201.929688 2129.300781 2192.898438 2076.898438 C 2168.859375 1937.390625 2070.769531 1812.859375 1940.769531 1756.820312 C 1860.28125 1811.921875 1785.429688 1875.261719 1725.238281 1956.820312 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(46.702576%, 74.804688%, 40.405273%)"
        fillOpacity="1"
        d="M 2011.828125 1798.351562 C 1839.199219 1970.980469 1615.691406 2106 1293.511719 2142.230469 C 971.328125 2178.460938 635.800781 2074.019531 391.089844 1861.351562 C 348.980469 1824.75 308.328125 1783.421875 288.679688 1731.210938 C 254.328125 1639.929688 300.808594 1525.359375 389.980469 1485.851562 C 436.628906 1465.179688 489.28125 1464.171875 540.300781 1463.5 C 763.949219 1460.570312 987.871094 1457.640625 1211.058594 1472.25 C 1466.488281 1488.960938 1724.339844 1528.5 1976.800781 1486.210938 C 2028.988281 1477.46875 2089.378906 1467.378906 2129.089844 1502.339844 C 2163.761719 1532.859375 2166.851562 1587.960938 2148.839844 1630.488281 C 2130.828125 1673.011719 2058.53125 1754.550781 2011.828125 1798.351562 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(43.089294%, 67.1875%, 42.700195%)"
        fillOpacity="1"
        d="M 2056.820312 1577.929688 C 1830.410156 1811.058594 1522.628906 1972.300781 1198.148438 1990.171875 C 873.671875 2008.039062 536.789062 1871.640625 330.019531 1612.550781 C 319.351562 1343.96875 434.160156 1073 634.539062 893.828125 C 834.921875 714.660156 1116.988281 630.761719 1381.78125 671.730469 C 1600.019531 706.230469 1808 803.351562 1974.550781 948.550781 C 2043.109375 1008.320312 2106.378906 1078.730469 2135.421875 1164.929688 C 2180.441406 1298.519531 2164.511719 1467.039062 2056.820312 1577.929688 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(52.146912%, 85.9375%, 44.700623%)"
        fillOpacity="1"
        d="M 2694.820312 905.210938 C 2556.25 826.921875 2371.019531 840.988281 2245.878906 939.320312 C 2116.941406 1040.628906 2061.761719 1209.109375 2033.828125 1370.691406 C 2021.191406 1443.808594 2013.53125 1522.78125 2047.121094 1588.949219 C 2073.578125 1641.078125 2122.558594 1678.300781 2174.050781 1705.96875 C 2364.480469 1808.308594 2611.558594 1794.929688 2789.820312 1672.628906 C 2854.628906 1628.160156 2912.121094 1567.898438 2935.578125 1492.878906 C 2958.460938 1419.699219 2946.898438 1340.171875 2926.789062 1266.179688 C 2887.351562 1121.109375 2813.351562 972.179688 2694.820312 905.210938 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(43.089294%, 67.1875%, 42.700195%)"
        fillOpacity="1"
        d="M 2208.199219 2166.980469 C 2202.109375 2147.730469 2200.371094 2128.878906 2198.140625 2113.171875 C 2196.109375 2093.730469 2193.320312 2074.398438 2190.070312 2055.128906 C 2186.410156 2028.179688 2181.460938 2001.089844 2170.789062 1975.929688 C 2156.710938 1942.890625 2138.769531 1911.398438 2116.589844 1883.109375 C 2103.238281 1866.191406 2088.460938 1850.351562 2072.46875 1835.890625 C 2060.839844 1826.359375 2053.191406 1819.539062 2041.761719 1812.070312 C 2032.839844 1806.5 2023.519531 1801.621094 2014.480469 1796.261719 C 2022.800781 1803.960938 2031.550781 1811.210938 2039.550781 1819.261719 C 2049.859375 1830.089844 2060.160156 1840.941406 2070.710938 1851.539062 C 2082.578125 1863.570312 2094.460938 1875.640625 2104.921875 1888.941406 C 2127.308594 1916.761719 2153.101562 1961.199219 2164.539062 1995.941406 C 2171.230469 2016.320312 2174.78125 2037.519531 2177.691406 2058.710938 C 2181.78125 2082.398438 2183.480469 2097.839844 2186.410156 2122.078125 C 2188.859375 2138.921875 2190.828125 2156.011719 2196.371094 2172.179688 C 2202.539062 2189.558594 2206.601562 2201.359375 2205.660156 2217.539062 C 2205.128906 2229.359375 2204.480469 2235.941406 2200.109375 2248.46875 C 2196.898438 2258.660156 2189.789062 2269.148438 2179.828125 2277.148438 C 2191.199219 2271.558594 2200.738281 2262.621094 2206.71875 2251.421875 C 2214.28125 2238.410156 2217.820312 2223.328125 2218.179688 2208.359375 C 2217.851562 2193.988281 2212.859375 2180.390625 2208.199219 2166.980469 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(43.089294%, 67.1875%, 42.700195%)"
        fillOpacity="1"
        d="M 469.238281 2242.910156 C 467.558594 2234.761719 464.800781 2226.910156 462.089844 2219.058594 C 459.230469 2210.101562 456.351562 2201.148438 453.46875 2192.191406 C 446.890625 2170.460938 441.089844 2148.5 433.890625 2126.960938 C 425.558594 2101.121094 418.300781 2074.941406 409.511719 2049.25 C 403.929688 2032.511719 400.261719 2015.210938 395.519531 1998.230469 C 389.890625 1977.089844 385.449219 1955.660156 381.019531 1934.25 C 378.539062 1920.988281 376.550781 1907.640625 373.839844 1894.421875 C 369.980469 1872.5 364.480469 1850.941406 359.710938 1829.210938 C 359.941406 1844.171875 361 1859.089844 361.910156 1874.019531 C 362.988281 1893.660156 364.730469 1913.261719 367.96875 1932.660156 C 373.488281 1963.761719 381.589844 1994.320312 390.609375 2024.578125 C 394.921875 2041.039062 400.921875 2056.960938 405.980469 2073.179688 C 414.988281 2104.101562 424.769531 2134.78125 434.121094 2165.601562 C 439.601562 2184.320312 445.480469 2202.941406 452.261719 2221.230469 C 456.039062 2230.628906 458.019531 2234.261719 461.351562 2243.859375 C 466.519531 2258.738281 472.960938 2273.191406 480.371094 2287.078125 C 476.261719 2272.46875 472.53125 2257.738281 469.238281 2242.910156 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(21.18988%, 30.200195%, 21.18988%)"
        fillOpacity="1"
        d="M 2576.800781 1453.800781 C 2574.191406 1451.53125 2569.691406 1453.089844 2568.878906 1456.421875 C 2568.300781 1460.398438 2567.601562 1464.371094 2566.371094 1468.199219 C 2565.640625 1470.429688 2565.28125 1471.640625 2563.429688 1476.128906 C 2563.351562 1476.300781 2563.039062 1477 2562.738281 1477.710938 C 2562.71875 1477.761719 2562.699219 1477.800781 2562.671875 1477.851562 C 2561.5 1480.671875 2559.96875 1483.308594 2558.429688 1485.941406 C 2551.648438 1497.488281 2543.601562 1504.398438 2533.339844 1507.980469 C 2529.308594 1509.351562 2525.148438 1510.339844 2520.941406 1510.949219 C 2514.96875 1511.539062 2504.199219 1510.46875 2504.300781 1510.308594 C 2486.261719 1506.820312 2476.421875 1503.960938 2466.070312 1492.960938 C 2462.789062 1489.820312 2460.21875 1484.871094 2458.671875 1482.390625 C 2455.261719 1476.320312 2453.691406 1473.539062 2452.378906 1469.589844 C 2450.261719 1462.640625 2440 1465.410156 2441.710938 1472.53125 C 2446.179688 1487.871094 2452.25 1500.890625 2469.671875 1511.929688 C 2481.199219 1518.429688 2494.488281 1521.171875 2507.550781 1522.480469 C 2521.898438 1523.949219 2536.710938 1520.660156 2549.058594 1513.210938 C 2558.128906 1507.539062 2565.148438 1499.339844 2570.179688 1489.960938 C 2574.019531 1482.558594 2575.808594 1474.328125 2577.46875 1466.21875 C 2577.949219 1463.730469 2578.320312 1461.21875 2578.648438 1458.710938 C 2578.621094 1458.921875 2578.601562 1459.121094 2578.578125 1459.230469 C 2579.140625 1457.289062 2578.53125 1454.941406 2576.800781 1453.800781 "
      />
      <path
        fillRule="evenodd"
        fill="rgb(21.18988%, 30.200195%, 21.18988%)"
        fillOpacity="1"
        d="M 2667.289062 1274.320312 C 2696.160156 1274.320312 2719.589844 1297.761719 2719.589844 1326.621094 C 2719.589844 1355.480469 2696.160156 1378.921875 2667.289062 1378.921875 C 2638.429688 1378.921875 2614.988281 1355.480469 2614.988281 1326.621094 C 2614.988281 1297.761719 2638.429688 1274.320312 2667.289062 1274.320312 "
      />
      <path
        fillRule="evenodd"
        fill="rgb(21.18988%, 30.200195%, 21.18988%)"
        fillOpacity="1"
        d="M 2352.921875 1292.808594 C 2381.789062 1292.808594 2405.21875 1316.238281 2405.21875 1345.109375 C 2405.21875 1373.96875 2381.789062 1397.410156 2352.921875 1397.410156 C 2324.058594 1397.410156 2300.621094 1373.96875 2300.621094 1345.109375 C 2300.621094 1316.238281 2324.058594 1292.808594 2352.921875 1292.808594 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(68.554688%, 90.234375%, 63.867188%)"
        fillOpacity="1"
        d="M 2030.828125 1367.039062 C 2030.039062 1365.769531 2028.820312 1364.921875 2027.398438 1364.480469 C 2023.519531 1362.429688 2023.929688 1362.988281 2019.679688 1361.070312 C 2020.140625 1361.261719 2020.601562 1361.460938 2021.050781 1361.648438 C 2020.449219 1361.398438 2019.859375 1361.148438 2019.261719 1360.890625 C 2019.230469 1360.878906 2019.199219 1360.859375 2019.140625 1360.839844 C 2012.519531 1357.96875 2006.101562 1354.691406 1999.488281 1351.789062 C 1978.949219 1342.640625 1958.308594 1333.679688 1937.488281 1325.210938 C 1915.378906 1316.550781 1892.929688 1308.808594 1870.539062 1300.890625 C 1830.390625 1286.570312 1790.21875 1272.28125 1749.789062 1258.769531 C 1723.160156 1249.78125 1696.089844 1242.160156 1668.980469 1234.761719 C 1648.179688 1229.019531 1627.46875 1222.96875 1606.679688 1217.210938 C 1588.039062 1212.140625 1569.441406 1206.851562 1550.601562 1202.539062 C 1549.558594 1202.269531 1548.609375 1202.300781 1547.769531 1202.550781 C 1537.441406 1154.199219 1524.398438 1106.511719 1512.488281 1058.539062 C 1502.601562 1017.03125 1494.058594 975.210938 1484.371094 933.660156 C 1478.238281 906.441406 1471.941406 879.25 1465.859375 852.019531 C 1459.78125 824.710938 1453.648438 797.421875 1446.179688 770.449219 C 1442.539062 756.710938 1438.648438 743.03125 1433.679688 729.699219 C 1429.980469 719.179688 1426.398438 708.601562 1421.949219 698.371094 C 1420.660156 695.621094 1417.839844 688.121094 1415.148438 681.589844 C 1415.289062 681.859375 1415.980469 683.628906 1415.53125 682.441406 C 1414.371094 677.851562 1407.699219 676.808594 1405.308594 681.101562 C 1404.28125 682.890625 1404.390625 685.03125 1405.28125 686.859375 C 1405.980469 688.699219 1406.640625 690.570312 1407.449219 692.371094 C 1410.230469 698.941406 1410.570312 699.179688 1413.460938 706.738281 C 1420.160156 725.53125 1426.488281 744.488281 1431.78125 763.730469 C 1439.75 792.359375 1446.328125 821.328125 1452.609375 850.371094 C 1458.109375 875.121094 1464.230469 899.71875 1469.96875 924.421875 C 1477.328125 955.960938 1484.828125 987.460938 1491.769531 1019.101562 C 1497.96875 1048.550781 1505.5 1077.691406 1513.050781 1106.820312 C 1520.78125 1135.691406 1528.039062 1164.671875 1534.578125 1193.828125 C 1535.21875 1196.609375 1535.851562 1199.390625 1536.46875 1202.171875 C 1536.921875 1203.640625 1537 1205.269531 1537.53125 1206.699219 C 1537.390625 1206.808594 1537.238281 1206.929688 1537.089844 1207.039062 C 1531.121094 1211.988281 1525.121094 1216.921875 1519.199219 1221.929688 C 1506.609375 1232.609375 1493.910156 1243.171875 1481.550781 1254.121094 C 1470.441406 1263.660156 1459.679688 1273.609375 1448.25 1282.761719 C 1427.730469 1299.078125 1407.621094 1315.921875 1387.890625 1333.191406 C 1370.609375 1348.660156 1353.789062 1364.648438 1336.980469 1380.621094 C 1310.730469 1405.269531 1285.691406 1431.128906 1261.039062 1457.371094 C 1255.589844 1463.128906 1250.25 1468.988281 1244.890625 1474.820312 C 1244.46875 1474.101562 1243.878906 1473.46875 1243.109375 1473.039062 C 1240.710938 1472.011719 1238.308594 1470.960938 1235.921875 1469.898438 C 1227.878906 1466.308594 1219.851562 1462.691406 1211.761719 1459.199219 C 1196.359375 1452.53125 1180.699219 1446.480469 1165.199219 1440.058594 C 1151.550781 1434.308594 1132.578125 1426.210938 1115.101562 1419.449219 C 1075.199219 1404.039062 1034.761719 1390.070312 994.101562 1376.800781 C 960.351562 1366.308594 927.71875 1352.589844 894.011719 1342 C 873.421875 1335.339844 852.488281 1329.800781 831.640625 1324.039062 C 827.140625 1322.78125 822.628906 1321.53125 818.121094 1320.28125 C 805.011719 1290.339844 792.988281 1251.96875 780.390625 1217.710938 C 764.828125 1174.300781 747.738281 1131.46875 730.730469 1088.609375 C 715.109375 1049.148438 699.21875 1008.980469 683.5 973.800781 C 675.03125 954.898438 664.601562 936.988281 654.78125 918.78125 C 651.949219 913.390625 649.089844 908 646.050781 902.730469 C 644.421875 900.328125 643.339844 897.421875 641.238281 895.429688 C 638.621094 893.160156 634.140625 895.351562 634.261719 898.851562 C 634.230469 900.570312 635.441406 901.890625 636.191406 903.339844 C 637.949219 906.378906 639.628906 909.460938 641.289062 912.550781 C 649.96875 929.191406 659.128906 945.589844 667.238281 962.519531 C 682.519531 997.570312 699.828125 1041.71875 715.460938 1081.308594 C 734.28125 1129.199219 753.589844 1176.910156 771.128906 1225.289062 C 781.261719 1253 791.308594 1280.761719 802.371094 1308.121094 C 804.230469 1312.738281 806.261719 1317.289062 808.378906 1321.789062 C 808.78125 1322.480469 809.070312 1323.238281 809.371094 1323.988281 C 809.351562 1324.019531 809.320312 1324.039062 809.300781 1324.078125 C 806.359375 1327.070312 805.460938 1328.28125 804.71875 1329.289062 C 799.300781 1336.320312 794.328125 1343.679688 789.191406 1350.921875 C 765.511719 1384.390625 742.699219 1418.460938 719.089844 1451.96875 C 679.699219 1507.679688 640.71875 1563.71875 605.011719 1621.890625 C 580.578125 1660.648438 554.910156 1698.628906 530.820312 1737.601562 C 521.640625 1752.46875 512.78125 1767.539062 504.199219 1782.761719 C 506.78125 1784.839844 509.359375 1786.929688 511.898438 1789.058594 C 512.078125 1789.210938 512.261719 1789.371094 512.441406 1789.53125 C 543.800781 1734.21875 580 1681.839844 614.308594 1628.339844 C 629.550781 1604.199219 644.898438 1580.128906 660.890625 1556.488281 C 682.921875 1524.25 705.550781 1492.410156 728 1460.449219 C 752.039062 1426.46875 774.761719 1391.578125 798.449219 1357.351562 C 803.578125 1349.769531 808.941406 1342.339844 814.011719 1334.71875 C 814.609375 1333.828125 815.121094 1332.878906 815.640625 1331.941406 C 815.941406 1331.410156 816.238281 1330.878906 816.539062 1330.351562 C 843.628906 1338.460938 871.011719 1345.570312 897.851562 1354.488281 C 924.070312 1362.910156 949.539062 1373.421875 975.679688 1382.070312 C 1020.058594 1396.550781 1064.320312 1411.46875 1107.96875 1428.050781 C 1127.089844 1435.269531 1145.898438 1443.269531 1164.761719 1451.128906 C 1182.609375 1458.429688 1199.429688 1465.050781 1214.121094 1471.539062 C 1220.828125 1474.460938 1227.5 1477.480469 1234.210938 1480.398438 C 1235.078125 1480.78125 1235.949219 1481.148438 1236.828125 1481.53125 C 1237.460938 1481.800781 1238.089844 1482.070312 1238.730469 1482.328125 C 1238.320312 1482.160156 1237.910156 1481.980469 1237.488281 1481.808594 C 1238.800781 1482.519531 1240.28125 1482.921875 1241.75 1482.53125 C 1245.800781 1500.488281 1250.578125 1518.269531 1254.480469 1536.261719 C 1259.601562 1561.050781 1263.511719 1586.078125 1267.960938 1611 C 1275.949219 1655.480469 1284.570312 1699.851562 1291.351562 1744.539062 C 1296.871094 1779.558594 1299.578125 1811.28125 1305.570312 1848.730469 C 1310.640625 1880.230469 1318.660156 1911.128906 1325.691406 1942.230469 C 1327.28125 1949.128906 1328.730469 1956.058594 1330.230469 1962.980469 C 1330.71875 1965.289062 1331.160156 1967.621094 1331.578125 1969.941406 C 1331.839844 1971.210938 1331.871094 1972.621094 1332.820312 1973.589844 C 1332.980469 1973.828125 1333.171875 1974.039062 1333.359375 1974.230469 C 1336.019531 1973.621094 1338.671875 1973 1341.320312 1972.351562 C 1341.371094 1972.210938 1341.429688 1972.070312 1341.460938 1971.910156 C 1341.890625 1970.53125 1341.410156 1969.160156 1341.191406 1967.789062 C 1340.78125 1965.519531 1340.359375 1963.25 1339.890625 1961 C 1335.320312 1935.039062 1329.199219 1909.398438 1323.941406 1883.578125 C 1319.589844 1861.878906 1315.328125 1833.460938 1313.140625 1816.910156 C 1305.671875 1752.03125 1294.800781 1687.621094 1281.929688 1623.609375 C 1274.921875 1588.25 1269.730469 1552.5 1260.949219 1517.511719 C 1258.660156 1508.5 1256.300781 1499.511719 1254.191406 1490.460938 C 1253.53125 1487.640625 1252.890625 1484.808594 1252.210938 1481.988281 C 1252.148438 1481.808594 1252.101562 1481.621094 1252.058594 1481.441406 C 1297.960938 1432.628906 1345.96875 1385.789062 1395.980469 1341.199219 C 1417.96875 1321.988281 1440.410156 1303.300781 1463.039062 1284.859375 C 1484.289062 1266.269531 1505.738281 1247.898438 1527.25 1229.609375 C 1532 1225.5 1536.769531 1221.421875 1541.578125 1217.378906 C 1543.160156 1215.761719 1545.628906 1214.269531 1547.429688 1212.519531 C 1547.558594 1212.570312 1547.660156 1212.628906 1547.789062 1212.679688 C 1579.71875 1221.339844 1611.429688 1230.839844 1643.238281 1239.929688 C 1667.839844 1247.050781 1692.570312 1253.75 1717.101562 1261.109375 C 1756.03125 1273.03125 1794.371094 1286.78125 1832.839844 1300.078125 C 1865.039062 1311.570312 1897.46875 1322.410156 1929.429688 1334.558594 C 1953.269531 1344.171875 1976.691406 1354.328125 2002.898438 1366.46875 C 2007.058594 1368.460938 2011.339844 1370.199219 2015.648438 1371.839844 C 2018.960938 1372.949219 2022.199219 1374.609375 2025.671875 1375 C 2025.429688 1375.050781 2023.5 1374.578125 2024.699219 1374.988281 C 2029.160156 1376.261719 2033.351562 1371.199219 2030.828125 1367.039062 "
      />
      <path
        fillRule="nonzero"
        fill="rgb(43.089294%, 67.1875%, 42.700195%)"
        fillOpacity="1"
        d="M 759.578125 2233.070312 C 755.351562 2215.039062 748.28125 2190.171875 746.601562 2176.351562 C 745.03125 2161.429688 745.238281 2146.359375 746.429688 2131.429688 C 747.589844 2112.421875 750.679688 2095.128906 756.890625 2075.511719 C 737.421875 2110.910156 730.699219 2150.351562 739.070312 2190.011719 C 742.800781 2208.03125 749.578125 2225.238281 756.011719 2242.429688 C 760.101562 2253.300781 763.21875 2268.878906 761.148438 2277.601562 C 763.28125 2273.140625 763.621094 2268.191406 763.738281 2263.328125 C 764.179688 2253.089844 762.210938 2242.921875 759.578125 2233.070312 "
      />
    </svg>
  );
}
