import {ElementBox, RadioActiveElementBox, PeriodsBox, GroupsBox, BlankBox} from "./components/ElementBoxes.jsx";

const App = () => {
    return (
        <div className={`min-h-screen bg-black flex items-center justify-center`}>
            <div className="p-10 overflow-x-auto">
                <div
                    className="inline-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(19, 65px)',
                        gridTemplateRows: 'repeat(8, 65px)',
                        gap: '20px',
                    }}
                >
                    <div className="w-20 h-20 bg-black rounded-md"></div>
                    <GroupsBox groupNumber="1"/>
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <GroupsBox groupNumber="18"/>

                    {/*Row 2*/}
                    <PeriodsBox periodNumber="1" />
                    <ElementBox atomicNumber="1" symbol="H" atomicWeight="1.008" groupName = "group-noble-gases" />
                    <GroupsBox groupNumber="2"/>
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <GroupsBox groupNumber="13"/>
                    <GroupsBox groupNumber="14"/>
                    <GroupsBox groupNumber="15"/>
                    <GroupsBox groupNumber="16"/>
                    <GroupsBox groupNumber="17"/>
                    <ElementBox atomicNumber="2" symbol="He" atomicWeight="4.0026" groupName = "group-noble-gases" />

                    {/*Row 3*/}
                    <PeriodsBox periodNumber="2" />
                    <ElementBox atomicNumber="3" symbol="Li" atomicWeight="6.94" groupName = "group-alkali" />
                    <ElementBox atomicNumber="4" symbol="Be" atomicWeight="9.012" groupName = "group-alkaline-earth" />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <ElementBox atomicNumber="5" symbol="B" atomicWeight="10.81" groupName = "group-metals" />
                    <ElementBox atomicNumber="6" symbol="C" atomicWeight="12.011" groupName = "group-nonmetals" />
                    <ElementBox atomicNumber="7" symbol="N" atomicWeight="14.007" groupName = "group-nonmetals" />
                    <ElementBox atomicNumber="8" symbol="O" atomicWeight="15.999" groupName = "group-nonmetals" />
                    <ElementBox atomicNumber="9" symbol="F" atomicWeight="18.998" groupName = "group-halogen" />
                    <ElementBox atomicNumber="10" symbol="Ne" atomicWeight="20.180" groupName = "group-noble-gases" />


                    {/*Row 4*/}
                    <PeriodsBox periodNumber="3" />
                    <ElementBox atomicNumber="11" symbol="Na" atomicWeight="22.990" groupName = "group-alkali" />
                    <ElementBox atomicNumber="12" symbol="Mg" atomicWeight="24.305" groupName = "group-alkaline-earth" />
                    <GroupsBox groupNumber="3"/>
                    <GroupsBox groupNumber="4"/>
                    <GroupsBox groupNumber="5"/>
                    <GroupsBox groupNumber="6"/>
                    <GroupsBox groupNumber="7"/>
                    <GroupsBox groupNumber="8"/>
                    <GroupsBox groupNumber="9"/>
                    <GroupsBox groupNumber="10"/>
                    <GroupsBox groupNumber="11"/>
                    <GroupsBox groupNumber="12"/>
                    <ElementBox atomicNumber="13" symbol="Al" atomicWeight="26.982" groupName = "group-metals" />
                    <ElementBox atomicNumber="14" symbol="Si" atomicWeight="28.085" groupName = "group-metalloids" />
                    <ElementBox atomicNumber="15" symbol="P" atomicWeight="30.974" groupName = "group-nonmetals" />
                    <ElementBox atomicNumber="16" symbol="S" atomicWeight="32.06" groupName = "group-nonmetals" />
                    <ElementBox atomicNumber="17" symbol="Cl" atomicWeight="35.45" groupName = "group-halogen" />
                    <ElementBox atomicNumber="18" symbol="Ar" atomicWeight="39.948" groupName = "group-noble-gases" />

                    {/*Row 5*/}
                    <PeriodsBox periodNumber="4" />
                    <ElementBox atomicNumber="19" symbol="K" atomicWeight="39.098" groupName = "group-alkali" />
                    <ElementBox atomicNumber="20" symbol="Ca" atomicWeight="40.078" groupName = "group-alkaline-earth" />
                    <ElementBox atomicNumber="21" symbol="Sc" atomicWeight="44.956" groupName = "group-transition" />
                    <ElementBox atomicNumber="22" symbol="Ti" atomicWeight="47.867" groupName = "group-transition" />
                    <ElementBox atomicNumber="23" symbol="V" atomicWeight="50.942" groupName = "group-transition" />
                    <ElementBox atomicNumber="24" symbol="Cr" atomicWeight="51.996" groupName = "group-transition" />
                    <ElementBox atomicNumber="25" symbol="Mn" atomicWeight="54.938" groupName = "group-transition" />
                    <ElementBox atomicNumber="26" symbol="Fe" atomicWeight="55.845" groupName = "group-transition" />
                    <ElementBox atomicNumber="27" symbol="Co" atomicWeight="58.933" groupName = "group-transition" />
                    <ElementBox atomicNumber="28" symbol="Ni" atomicWeight="58.693" groupName = "group-transition" />
                    <ElementBox atomicNumber="29" symbol="Cu" atomicWeight="63.546" groupName = "group-transition" />
                    <ElementBox atomicNumber="30" symbol="Zn" atomicWeight="65.38" groupName = "group-transition" />
                    <ElementBox atomicNumber="31" symbol="Ga" atomicWeight="69.723" groupName = "group-metals" />
                    <ElementBox atomicNumber="32" symbol="Ge" atomicWeight="72.63" groupName = "group-metalloids" />
                    <ElementBox atomicNumber="33" symbol="As" atomicWeight="74.922" groupName = "group-metalloids" />
                    <ElementBox atomicNumber="34" symbol="Se" atomicWeight="78.971" groupName = "group-nonmetals" />
                    <ElementBox atomicNumber="35" symbol="Br" atomicWeight="79.904" groupName = "group-halogen" />
                    <ElementBox atomicNumber="36" symbol="Kr" atomicWeight="83.798" groupName = "group-noble-gases" />

                    {/*Row 6 */}
                    <PeriodsBox periodNumber="5" />
                    <ElementBox atomicNumber="37" symbol="Rb" atomicWeight="85.468" groupName = "group-alkali" />
                    <ElementBox atomicNumber="38" symbol="Sr" atomicWeight="87.62" groupName = "group-alkaline-earth" />
                    <ElementBox atomicNumber="39" symbol="Y" atomicWeight="88.906" groupName = "group-transition" />
                    <ElementBox atomicNumber="40" symbol="Zr" atomicWeight="91.224" groupName = "group-transition" />
                    <ElementBox atomicNumber="41" symbol="Nb" atomicWeight="92.906" groupName = "group-transition" />
                    <ElementBox atomicNumber="42" symbol="Mo" atomicWeight="95.95" groupName = "group-transition" />
                    <RadioActiveElementBox atomicNumber="43" symbol="Tc" atomicWeight="98" groupName = "group-transition" />
                    <ElementBox atomicNumber="44" symbol="Ru" atomicWeight="101.07" groupName = "group-transition" />
                    <ElementBox atomicNumber="45" symbol="Rh" atomicWeight="102.906" groupName = "group-transition" />
                    <ElementBox atomicNumber="46" symbol="Pd" atomicWeight="106.42" groupName = "group-transition" />
                    <ElementBox atomicNumber="47" symbol="Ag" atomicWeight="107.868" groupName = "group-transition" />
                    <ElementBox atomicNumber="48" symbol="Cd" atomicWeight="112.414" groupName = "group-transition" />
                    <ElementBox atomicNumber="49" symbol="In" atomicWeight="114.818" groupName = "group-metals" />
                    <ElementBox atomicNumber="50" symbol="Sn" atomicWeight="118.71" groupName = "group-metals" />
                    <ElementBox atomicNumber="51" symbol="Sb" atomicWeight="121.76" groupName = "group-metalloids" />
                    <ElementBox atomicNumber="52" symbol="Te" atomicWeight="127.6" groupName = "group-metalloids" />
                    <ElementBox atomicNumber="53" symbol="I" atomicWeight="126.904" groupName = "group-halogen" />
                    <ElementBox atomicNumber="54" symbol="Xe" atomicWeight="131.293" groupName = "group-noble-gases" />

                    {/*Row 7 */}
                    <PeriodsBox periodNumber="6" />
                    <ElementBox atomicNumber="55" symbol="Cs" atomicWeight="132.905" groupName = "group-alkali" />
                    <ElementBox atomicNumber="56" symbol="Ba" atomicWeight="137.327" groupName = "group-alkaline-earth" />
                    <ElementBox atomicNumber="57" symbol="La" atomicWeight="138.905" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="72" symbol="Hf" atomicWeight="178.49" groupName = "group-transition" />
                    <ElementBox atomicNumber="73" symbol="Ta" atomicWeight="180.948" groupName = "group-transition" />
                    <ElementBox atomicNumber="74" symbol="W" atomicWeight="183.84" groupName = "group-transition" />
                    <ElementBox atomicNumber="75" symbol="Re" atomicWeight="186.207" groupName = "group-transition" />
                    <ElementBox atomicNumber="76" symbol="Os" atomicWeight="190.23" groupName = "group-transition" />
                    <ElementBox atomicNumber="77" symbol="Ir" atomicWeight="192.217" groupName = "group-transition" />
                    <ElementBox atomicNumber="78" symbol="Pt" atomicWeight="195.084" groupName = "group-transition" />
                    <ElementBox atomicNumber="79" symbol="Au" atomicWeight="196.967" groupName = "group-transition" />
                    <ElementBox atomicNumber="80" symbol="Hg" atomicWeight="200.592" groupName = "group-transition" />
                    <ElementBox atomicNumber="81" symbol="Tl" atomicWeight="204.38" groupName = "group-metals" />
                    <ElementBox atomicNumber="82" symbol="Pb" atomicWeight="207.2" groupName = "group-metals" />
                    <ElementBox atomicNumber="83" symbol="Bi" atomicWeight="208.98" groupName = "group-metals" />
                    <RadioActiveElementBox atomicNumber="84" symbol="Po" atomicWeight="209" groupName = "group-metalloids" />
                    <RadioActiveElementBox atomicNumber="85" symbol="At" atomicWeight="210" groupName = "group-halogen" />
                    <RadioActiveElementBox atomicNumber="86" symbol="Rn" atomicWeight="222" groupName = "group-noble-gases" />

                    {/*Row 8*/}
                    <PeriodsBox periodNumber="7" />
                    <RadioActiveElementBox atomicNumber="87" symbol="Fr" atomicWeight="223" groupName = "group-alkali" />

                    <RadioActiveElementBox atomicNumber="88" symbol="Ra" atomicWeight="226" groupName = "group-alkaline-earth" />
                    <ElementBox atomicNumber="89" symbol="Ac" atomicWeight="227" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="104" symbol="Rf" atomicWeight="267" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="105" symbol="Db" atomicWeight="270" groupName = "group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="106" symbol="Sg" atomicWeight="271" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="107" symbol="Bh" atomicWeight="270" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="108" symbol="Hs" atomicWeight="277" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="109" symbol="Mt" atomicWeight="276" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="110" symbol="Ds" atomicWeight="281" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="111" symbol="Rg" atomicWeight="280" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="112" symbol="Cn" atomicWeight="285" groupName = "group-transactinides" />
                    <RadioActiveElementBox atomicNumber="113" symbol="Nh" atomicWeight="284" groupName = "group-metals" />
                    <RadioActiveElementBox atomicNumber="114" symbol="Fl" atomicWeight="289" groupName = "group-metals" />
                    <RadioActiveElementBox atomicNumber="115" symbol="Mc" atomicWeight="288" groupName = "group-metals" />
                    <RadioActiveElementBox atomicNumber="116" symbol="Lv" atomicWeight="293" groupName = "group-metalloids" />
                    <RadioActiveElementBox atomicNumber="117" symbol="Ts" atomicWeight="294" groupName = "group-halogen" />
                    <RadioActiveElementBox atomicNumber="118" symbol="Og" atomicWeight="294" groupName = "group-noble-gases" />

                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>
                    <div className="w-20 h-1 rounded-md"></div>

                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />

                    <PeriodsBox periodNumber="6" periodName="Lanthanides"/>
                    <ElementBox atomicNumber="58" symbol="Ce" atomicWeight="140.116" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="59" symbol="Pr" atomicWeight="140.908" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="60" symbol="Nd" atomicWeight="144.242" groupName = "group-lanthanides" />
                    <RadioActiveElementBox atomicNumber="61" symbol="Pm" atomicWeight="145" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="62" symbol="Sm" atomicWeight="150.36" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="63" symbol="Eu" atomicWeight="151.964" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="64" symbol="Gd" atomicWeight="157.25" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="65" symbol="Tb" atomicWeight="158.925" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="66" symbol="Dy" atomicWeight="162.5" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="67" symbol="Ho" atomicWeight="164.93" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="68" symbol="Er" atomicWeight="167.259" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="69" symbol="Tm" atomicWeight="168.934" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="70" symbol="Yb" atomicWeight="173.045" groupName = "group-lanthanides" />
                    <ElementBox atomicNumber="71" symbol="Lu" atomicWeight="174.967" groupName = "group-lanthanides" />

                    <BlankBox />
                    <BlankBox />
                    <BlankBox />
                    <BlankBox />

                    <PeriodsBox periodNumber="7" periodName="Actinides"/>
                    <RadioActiveElementBox atomicNumber="90" symbol="Th" atomicWeight="232.038" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="91" symbol="Pa" atomicWeight="231.036" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="92" symbol="U" atomicWeight="238.029" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="93" symbol="Np" atomicWeight="237" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="94" symbol="Pu" atomicWeight="244" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="95" symbol="Am" atomicWeight="243" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="96" symbol="Cm" atomicWeight="247" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="97" symbol="Bk" atomicWeight="247" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="98" symbol="Cf" atomicWeight="251" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="99" symbol="Es" atomicWeight="252" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="100" symbol="Fm" atomicWeight="257" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="101" symbol="Md" atomicWeight="258" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="102" symbol="No" atomicWeight="259" groupName = "group-actinides" />
                    <RadioActiveElementBox atomicNumber="103" symbol="Lr" atomicWeight="262" groupName = "group-actinides" />
                </div>
            </div>
        </div>
    );
};

export default App;