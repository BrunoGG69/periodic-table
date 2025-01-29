import {BlankBox, ElementBox, GroupsBox, PeriodsBox, RadioActiveElementBox} from "./components/ElementBoxes.jsx";
import {useEffect, useRef} from "react";


const App = () => {
    const modalRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                const openModals = document.querySelectorAll("dialog[open]")
                openModals.forEach((modal) => modal.close())
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className={`
        min-h-screen 
        bg-black 
        flex 
        items-center 
        justify-center
        `}>
            <div
                className="
                p-10
                max-w-full
                overflow-x-auto
                mx-auto">
                <div
                    className="grid
                    scale-[85%]
                    "
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(19, 65px)',
                        gridTemplateRows: 'repeat(8, 65px)',
                        gap: '20px',
                    }}
                >
                    <BlankBox/>
                    <GroupsBox groupNumber="1"/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <GroupsBox groupNumber="18"/>

                    {/*Row 2*/}
                    <PeriodsBox periodNumber="1"/>
                    <ElementBox atomicNumber="1" symbol="H" atomicWeight="1.008" groupName="group-noble-gases"
                                onClick={() => document.getElementById('1').showModal()}/>
                    <GroupsBox groupNumber="2"/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <GroupsBox groupNumber="13"/>
                    <GroupsBox groupNumber="14"/>
                    <GroupsBox groupNumber="15"/>
                    <GroupsBox groupNumber="16"/>
                    <GroupsBox groupNumber="17"/>
                    <ElementBox atomicNumber="2" symbol="He" atomicWeight="4.0026" groupName="group-noble-gases"/>

                    {/*Row 3*/}
                    <PeriodsBox periodNumber="2"/>
                    <ElementBox atomicNumber="3" symbol="Li" atomicWeight="6.94" groupName="group-alkali"/>
                    <ElementBox atomicNumber="4" symbol="Be" atomicWeight="9.012" groupName="group-alkaline-earth"/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <ElementBox atomicNumber="5" symbol="B" atomicWeight="10.81" groupName="group-metals"/>
                    <ElementBox atomicNumber="6" symbol="C" atomicWeight="12.011" groupName="group-nonmetals"/>
                    <ElementBox atomicNumber="7" symbol="N" atomicWeight="14.007" groupName="group-nonmetals"/>
                    <ElementBox atomicNumber="8" symbol="O" atomicWeight="15.999" groupName="group-nonmetals"/>
                    <ElementBox atomicNumber="9" symbol="F" atomicWeight="18.998" groupName="group-halogen"/>
                    <ElementBox atomicNumber="10" symbol="Ne" atomicWeight="20.180" groupName="group-noble-gases"/>


                    {/*Row 4*/}
                    <PeriodsBox periodNumber="3"/>
                    <ElementBox atomicNumber="11" symbol="Na" atomicWeight="22.990" groupName="group-alkali"/>
                    <ElementBox atomicNumber="12" symbol="Mg" atomicWeight="24.305" groupName="group-alkaline-earth"/>
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
                    <ElementBox atomicNumber="13" symbol="Al" atomicWeight="26.982" groupName="group-metals"/>
                    <ElementBox atomicNumber="14" symbol="Si" atomicWeight="28.085" groupName="group-metalloids"/>
                    <ElementBox atomicNumber="15" symbol="P" atomicWeight="30.974" groupName="group-nonmetals"/>
                    <ElementBox atomicNumber="16" symbol="S" atomicWeight="32.06" groupName="group-nonmetals"/>
                    <ElementBox atomicNumber="17" symbol="Cl" atomicWeight="35.45" groupName="group-halogen"/>
                    <ElementBox atomicNumber="18" symbol="Ar" atomicWeight="39.948" groupName="group-noble-gases"/>

                    {/*Row 5*/}
                    <PeriodsBox periodNumber="4"/>
                    <ElementBox atomicNumber="19" symbol="K" atomicWeight="39.098" groupName="group-alkali"/>
                    <ElementBox atomicNumber="20" symbol="Ca" atomicWeight="40.078" groupName="group-alkaline-earth"/>
                    <ElementBox atomicNumber="21" symbol="Sc" atomicWeight="44.956" groupName="group-transition"/>
                    <ElementBox atomicNumber="22" symbol="Ti" atomicWeight="47.867" groupName="group-transition"/>
                    <ElementBox atomicNumber="23" symbol="V" atomicWeight="50.942" groupName="group-transition"/>
                    <ElementBox atomicNumber="24" symbol="Cr" atomicWeight="51.996" groupName="group-transition"/>
                    <ElementBox atomicNumber="25" symbol="Mn" atomicWeight="54.938" groupName="group-transition"/>
                    <ElementBox atomicNumber="26" symbol="Fe" atomicWeight="55.845" groupName="group-transition"/>
                    <ElementBox atomicNumber="27" symbol="Co" atomicWeight="58.933" groupName="group-transition"/>
                    <ElementBox atomicNumber="28" symbol="Ni" atomicWeight="58.693" groupName="group-transition"/>
                    <ElementBox atomicNumber="29" symbol="Cu" atomicWeight="63.546" groupName="group-transition"/>
                    <ElementBox atomicNumber="30" symbol="Zn" atomicWeight="65.38" groupName="group-transition"/>
                    <ElementBox atomicNumber="31" symbol="Ga" atomicWeight="69.723" groupName="group-metals"/>
                    <ElementBox atomicNumber="32" symbol="Ge" atomicWeight="72.63" groupName="group-metalloids"/>
                    <ElementBox atomicNumber="33" symbol="As" atomicWeight="74.922" groupName="group-metalloids"/>
                    <ElementBox atomicNumber="34" symbol="Se" atomicWeight="78.971" groupName="group-nonmetals"/>
                    <ElementBox atomicNumber="35" symbol="Br" atomicWeight="79.904" groupName="group-halogen"/>
                    <ElementBox atomicNumber="36" symbol="Kr" atomicWeight="83.798" groupName="group-noble-gases"/>

                    {/*Row 6 */}
                    <PeriodsBox periodNumber="5"/>
                    <ElementBox atomicNumber="37" symbol="Rb" atomicWeight="85.468" groupName="group-alkali"/>
                    <ElementBox atomicNumber="38" symbol="Sr" atomicWeight="87.62" groupName="group-alkaline-earth"/>
                    <ElementBox atomicNumber="39" symbol="Y" atomicWeight="88.906" groupName="group-transition"/>
                    <ElementBox atomicNumber="40" symbol="Zr" atomicWeight="91.224" groupName="group-transition"/>
                    <ElementBox atomicNumber="41" symbol="Nb" atomicWeight="92.906" groupName="group-transition"/>
                    <ElementBox atomicNumber="42" symbol="Mo" atomicWeight="95.95" groupName="group-transition"/>
                    <RadioActiveElementBox atomicNumber="43" symbol="Tc" atomicWeight="98"
                                           groupName="group-transition"/>
                    <ElementBox atomicNumber="44" symbol="Ru" atomicWeight="101.07" groupName="group-transition"/>
                    <ElementBox atomicNumber="45" symbol="Rh" atomicWeight="102.906" groupName="group-transition"/>
                    <ElementBox atomicNumber="46" symbol="Pd" atomicWeight="106.42" groupName="group-transition"/>
                    <ElementBox atomicNumber="47" symbol="Ag" atomicWeight="107.868" groupName="group-transition"/>
                    <ElementBox atomicNumber="48" symbol="Cd" atomicWeight="112.414" groupName="group-transition"/>
                    <ElementBox atomicNumber="49" symbol="In" atomicWeight="114.818" groupName="group-metals"/>
                    <ElementBox atomicNumber="50" symbol="Sn" atomicWeight="118.71" groupName="group-metals"/>
                    <ElementBox atomicNumber="51" symbol="Sb" atomicWeight="121.76" groupName="group-metalloids"/>
                    <ElementBox atomicNumber="52" symbol="Te" atomicWeight="127.6" groupName="group-metalloids"/>
                    <ElementBox atomicNumber="53" symbol="I" atomicWeight="126.904" groupName="group-halogen"/>
                    <ElementBox atomicNumber="54" symbol="Xe" atomicWeight="131.293" groupName="group-noble-gases"/>

                    {/*Row 7 */}
                    <PeriodsBox periodNumber="6"/>
                    <ElementBox atomicNumber="55" symbol="Cs" atomicWeight="132.905" groupName="group-alkali"/>
                    <ElementBox atomicNumber="56" symbol="Ba" atomicWeight="137.327" groupName="group-alkaline-earth"/>
                    <ElementBox atomicNumber="57" symbol="La" atomicWeight="138.905" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="72" symbol="Hf" atomicWeight="178.49" groupName="group-transition"/>
                    <ElementBox atomicNumber="73" symbol="Ta" atomicWeight="180.948" groupName="group-transition"/>
                    <ElementBox atomicNumber="74" symbol="W" atomicWeight="183.84" groupName="group-transition"/>
                    <ElementBox atomicNumber="75" symbol="Re" atomicWeight="186.207" groupName="group-transition"/>
                    <ElementBox atomicNumber="76" symbol="Os" atomicWeight="190.23" groupName="group-transition"/>
                    <ElementBox atomicNumber="77" symbol="Ir" atomicWeight="192.217" groupName="group-transition"/>
                    <ElementBox atomicNumber="78" symbol="Pt" atomicWeight="195.084" groupName="group-transition"/>
                    <ElementBox atomicNumber="79" symbol="Au" atomicWeight="196.967" groupName="group-transition"/>
                    <ElementBox atomicNumber="80" symbol="Hg" atomicWeight="200.592" groupName="group-transition"/>
                    <ElementBox atomicNumber="81" symbol="Tl" atomicWeight="204.38" groupName="group-metals"/>
                    <ElementBox atomicNumber="82" symbol="Pb" atomicWeight="207.2" groupName="group-metals"/>
                    <ElementBox atomicNumber="83" symbol="Bi" atomicWeight="208.98" groupName="group-metals"/>
                    <RadioActiveElementBox atomicNumber="84" symbol="Po" atomicWeight="209"
                                           groupName="group-metalloids"/>
                    <RadioActiveElementBox atomicNumber="85" symbol="At" atomicWeight="210" groupName="group-halogen"/>
                    <RadioActiveElementBox atomicNumber="86" symbol="Rn" atomicWeight="222"
                                           groupName="group-noble-gases"/>

                    {/*Row 8*/}
                    <PeriodsBox periodNumber="7"/>
                    <RadioActiveElementBox atomicNumber="87" symbol="Fr" atomicWeight="223" groupName="group-alkali"/>
                    <RadioActiveElementBox atomicNumber="88" symbol="Ra" atomicWeight="226"
                                           groupName="group-alkaline-earth"/>
                    <RadioActiveElementBox atomicNumber="89" symbol="Ac" atomicWeight="227"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="104" symbol="Rf" atomicWeight="267"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="105" symbol="Db" atomicWeight="270"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="106" symbol="Sg" atomicWeight="271"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="107" symbol="Bh" atomicWeight="270"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="108" symbol="Hs" atomicWeight="277"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="109" symbol="Mt" atomicWeight="276"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="110" symbol="Ds" atomicWeight="281"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="111" symbol="Rg" atomicWeight="280"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="112" symbol="Cn" atomicWeight="285"
                                           groupName="group-transactinides"/>
                    <RadioActiveElementBox atomicNumber="113" symbol="Nh" atomicWeight="284" groupName="group-metals"/>
                    <RadioActiveElementBox atomicNumber="114" symbol="Fl" atomicWeight="289" groupName="group-metals"/>
                    <RadioActiveElementBox atomicNumber="115" symbol="Mc" atomicWeight="288" groupName="group-metals"/>
                    <RadioActiveElementBox atomicNumber="116" symbol="Lv" atomicWeight="293"
                                           groupName="group-metalloids"/>
                    <RadioActiveElementBox atomicNumber="117" symbol="Ts" atomicWeight="294" groupName="group-halogen"/>
                    <RadioActiveElementBox atomicNumber="118" symbol="Og" atomicWeight="294"
                                           groupName="group-noble-gases"/>

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

                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>

                    <PeriodsBox periodNumber="6" periodName="Lanthanides"/>
                    <ElementBox atomicNumber="58" symbol="Ce" atomicWeight="140.116" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="59" symbol="Pr" atomicWeight="140.908" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="60" symbol="Nd" atomicWeight="144.242" groupName="group-lanthanides"/>
                    <RadioActiveElementBox atomicNumber="61" symbol="Pm" atomicWeight="145"
                                           groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="62" symbol="Sm" atomicWeight="150.36" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="63" symbol="Eu" atomicWeight="151.964" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="64" symbol="Gd" atomicWeight="157.25" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="65" symbol="Tb" atomicWeight="158.925" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="66" symbol="Dy" atomicWeight="162.5" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="67" symbol="Ho" atomicWeight="164.93" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="68" symbol="Er" atomicWeight="167.259" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="69" symbol="Tm" atomicWeight="168.934" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="70" symbol="Yb" atomicWeight="173.045" groupName="group-lanthanides"/>
                    <ElementBox atomicNumber="71" symbol="Lu" atomicWeight="174.967" groupName="group-lanthanides"/>

                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>
                    <BlankBox/>

                    <PeriodsBox periodNumber="7" periodName="Actinides"/>
                    <RadioActiveElementBox atomicNumber="90" symbol="Th" atomicWeight="232.038"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="91" symbol="Pa" atomicWeight="231.036"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="92" symbol="U" atomicWeight="238.029"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="93" symbol="Np" atomicWeight="237"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="94" symbol="Pu" atomicWeight="244"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="95" symbol="Am" atomicWeight="243"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="96" symbol="Cm" atomicWeight="247"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="97" symbol="Bk" atomicWeight="247"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="98" symbol="Cf" atomicWeight="251"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="99" symbol="Es" atomicWeight="252"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="100" symbol="Fm" atomicWeight="257"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="101" symbol="Md" atomicWeight="258"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="102" symbol="No" atomicWeight="259"
                                           groupName="group-actinides"/>
                    <RadioActiveElementBox atomicNumber="103" symbol="Lr" atomicWeight="262"
                                           groupName="group-actinides"/>
                </div>
            </div>

            <dialog id="1" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={1}
                                symbol="H"
                                atomicWeight="1.008"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Hydrogen</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> 1s¹</p>
                        <p><strong>Number of Electrons:</strong> 1</p>
                        <p><strong>Number of Protons:</strong> 1</p>
                        <p><strong>Number of Neutrons:</strong> 0</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('1').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="2" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={2}
                                symbol="He"
                                atomicWeight="4.0026"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Helium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> 1s²</p>
                        <p><strong>Number of Electrons:</strong> 2</p>
                        <p><strong>Number of Protons:</strong> 2</p>
                        <p><strong>Number of Neutrons:</strong> 2</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('2').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="3" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={3}
                                symbol="Li"
                                atomicWeight="6.94"
                                groupName="group-alkali"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Lithium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s¹</p>
                        <p><strong>Number of Electrons:</strong> 3</p>
                        <p><strong>Number of Protons:</strong> 3</p>
                        <p><strong>Number of Neutrons:</strong> 4</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('3').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="4" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={4}
                                symbol="Be"
                                atomicWeight="9.012"
                                groupName="group-alkaline-earth"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Beryllium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s²</p>
                        <p><strong>Number of Electrons:</strong> 4</p>
                        <p><strong>Number of Protons:</strong> 4</p>
                        <p><strong>Number of Neutrons:</strong> 5</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('4').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="5" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={5}
                                symbol="B"
                                atomicWeight="10.81"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Boron</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s² 2p¹</p>
                        <p><strong>Number of Electrons:</strong> 5</p>
                        <p><strong>Number of Protons:</strong> 5</p>
                        <p><strong>Number of Neutrons:</strong> 6</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('5').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="6" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={6}
                                symbol="C"
                                atomicWeight="12.011"
                                groupName="group-nonmetals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Carbon</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s² 2p²</p>
                        <p><strong>Number of Electrons:</strong> 6</p>
                        <p><strong>Number of Protons:</strong> 6</p>
                        <p><strong>Number of Neutrons:</strong> 6</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('6').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="7" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={7}
                                symbol="N"
                                atomicWeight="14.007"
                                groupName="group-nonmetals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Nitrogen</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s² 2p³</p>
                        <p><strong>Number of Electrons:</strong> 7</p>
                        <p><strong>Number of Protons:</strong> 7</p>
                        <p><strong>Number of Neutrons:</strong> 7</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('7').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="8" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={8}
                                symbol="O"
                                atomicWeight="15.999"
                                groupName="group-nonmetals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Oxygen</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s² 2p⁴</p>
                        <p><strong>Number of Electrons:</strong> 8</p>
                        <p><strong>Number of Protons:</strong> 8</p>
                        <p><strong>Number of Neutrons:</strong> 8</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('8').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="9" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={9}
                                symbol="F"
                                atomicWeight="18.998"
                                groupName="group-halogen"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Fluorine</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s² 2p⁵</p>
                        <p><strong>Number of Electrons:</strong> 9</p>
                        <p><strong>Number of Protons:</strong> 9</p>
                        <p><strong>Number of Neutrons:</strong> 10</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('9').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="10" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={10}
                                symbol="Ne"
                                atomicWeight="20.180"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Neon</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [He] 2s² 2p⁶</p>
                        <p><strong>Number of Electrons:</strong> 10</p>
                        <p><strong>Number of Protons:</strong> 10</p>
                        <p><strong>Number of Neutrons:</strong> 10</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('10').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="11" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={11}
                                symbol="Na"
                                atomicWeight="22.990"
                                groupName="group-alkali"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Sodium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s¹</p>
                        <p><strong>Number of Electrons:</strong> 11</p>
                        <p><strong>Number of Protons:</strong> 11</p>
                        <p><strong>Number of Neutrons:</strong> 12</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('11').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="12" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={12}
                                symbol="Mg"
                                atomicWeight="24.305"
                                groupName="group-alkaline-earth"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Magnesium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s²</p>
                        <p><strong>Number of Electrons:</strong> 12</p>
                        <p><strong>Number of Protons:</strong> 12</p>
                        <p><strong>Number of Neutrons:</strong> 12</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('12').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="13" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={13}
                                symbol="Al"
                                atomicWeight="26.982"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Aluminum</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s² 3p¹</p>
                        <p><strong>Number of Electrons:</strong> 13</p>
                        <p><strong>Number of Protons:</strong> 13</p>
                        <p><strong>Number of Neutrons:</strong> 14</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('13').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="14" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={14}
                                symbol="Si"
                                atomicWeight="28.085"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Silicon</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s² 3p²</p>
                        <p><strong>Number of Electrons:</strong> 14</p>
                        <p><strong>Number of Protons:</strong> 14</p>
                        <p><strong>Number of Neutrons:</strong> 14</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('14').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="15" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={15}
                                symbol="P"
                                atomicWeight="30.974"
                                groupName="group-nonmetals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Phosphorus</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s² 3p³</p>
                        <p><strong>Number of Electrons:</strong> 15</p>
                        <p><strong>Number of Protons:</strong> 15</p>
                        <p><strong>Number of Neutrons:</strong> 16</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('15').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="16" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={16}
                                symbol="S"
                                atomicWeight="32.06"
                                groupName="group-nonmetals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Sulfur</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s² 3p⁴</p>
                        <p><strong>Number of Electrons:</strong> 16</p>
                        <p><strong>Number of Protons:</strong> 16</p>
                        <p><strong>Number of Neutrons:</strong> 16</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('16').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="17" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={17}
                                symbol="Cl"
                                atomicWeight="35.45"
                                groupName="group-halogen"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Chlorine</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s² 3p⁵</p>
                        <p><strong>Number of Electrons:</strong> 17</p>
                        <p><strong>Number of Protons:</strong> 17</p>
                        <p><strong>Number of Neutrons:</strong> 18</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('17').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="18" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={18}
                                symbol="Ar"
                                atomicWeight="39.948"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Argon</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ne] 3s² 3p⁶</p>
                        <p><strong>Number of Electrons:</strong> 18</p>
                        <p><strong>Number of Protons:</strong> 18</p>
                        <p><strong>Number of Neutrons:</strong> 22</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('18').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="19" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={19}
                                symbol="K"
                                atomicWeight="39.098"
                                groupName="group-alkali"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Potassium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 4s¹</p>
                        <p><strong>Number of Electrons:</strong> 19</p>
                        <p><strong>Number of Protons:</strong> 19</p>
                        <p><strong>Number of Neutrons:</strong> 20</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('19').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="20" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={20}
                                symbol="Ca"
                                atomicWeight="40.078"
                                groupName="group-alkaline-earth"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Calcium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 4s²</p>
                        <p><strong>Number of Electrons:</strong> 20</p>
                        <p><strong>Number of Protons:</strong> 20</p>
                        <p><strong>Number of Neutrons:</strong> 20</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('20').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="21" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={21}
                                symbol="Sc"
                                atomicWeight="44.956"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Scandium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 21</p>
                        <p><strong>Number of Protons:</strong> 21</p>
                        <p><strong>Number of Neutrons:</strong> 24</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('21').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="22" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={22}
                                symbol="Ti"
                                atomicWeight="47.867"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Titanium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d² 4s²</p>
                        <p><strong>Number of Electrons:</strong> 22</p>
                        <p><strong>Number of Protons:</strong> 22</p>
                        <p><strong>Number of Neutrons:</strong> 26</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('22').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="23" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={23}
                                symbol="V"
                                atomicWeight="50.942"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Vanadium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d³ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 23</p>
                        <p><strong>Number of Protons:</strong> 23</p>
                        <p><strong>Number of Neutrons:</strong> 28</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('23').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="24" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={24}
                                symbol="Cr"
                                atomicWeight="51.996"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Chromium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d⁵ 4s¹</p>
                        <p><strong>Number of Electrons:</strong> 24</p>
                        <p><strong>Number of Protons:</strong> 24</p>
                        <p><strong>Number of Neutrons:</strong> 28</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('24').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="25" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={25}
                                symbol="Mn"
                                atomicWeight="54.938"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Manganese</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d⁵ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 25</p>
                        <p><strong>Number of Protons:</strong> 25</p>
                        <p><strong>Number of Neutrons:</strong> 30</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('25').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="26" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={26}
                                symbol="Fe"
                                atomicWeight="55.845"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Iron</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d⁶ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 26</p>
                        <p><strong>Number of Protons:</strong> 26</p>
                        <p><strong>Number of Neutrons:</strong> 30</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('26').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="27" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={27}
                                symbol="Co"
                                atomicWeight="58.933"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Cobalt</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d⁷ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 27</p>
                        <p><strong>Number of Protons:</strong> 27</p>
                        <p><strong>Number of Neutrons:</strong> 32</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('27').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="28" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={28}
                                symbol="Ni"
                                atomicWeight="58.693"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Nickel</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d⁸ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 28</p>
                        <p><strong>Number of Protons:</strong> 28</p>
                        <p><strong>Number of Neutrons:</strong> 31</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('28').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="29" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={29}
                                symbol="Cu"
                                atomicWeight="63.546"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Copper</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s¹</p>
                        <p><strong>Number of Electrons:</strong> 29</p>
                        <p><strong>Number of Protons:</strong> 29</p>
                        <p><strong>Number of Neutrons:</strong> 35</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('29').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="30" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={30}
                                symbol="Zn"
                                atomicWeight="65.38"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Zinc</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s²</p>
                        <p><strong>Number of Electrons:</strong> 30</p>
                        <p><strong>Number of Protons:</strong> 30</p>
                        <p><strong>Number of Neutrons:</strong> 35</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('30').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="31" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={31}
                                symbol="Ga"
                                atomicWeight="69.723"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Gallium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s² 4p¹</p>
                        <p><strong>Number of Electrons:</strong> 31</p>
                        <p><strong>Number of Protons:</strong> 31</p>
                        <p><strong>Number of Neutrons:</strong> 39</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('31').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="32" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={32}
                                symbol="Ge"
                                atomicWeight="72.63"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Germanium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s² 4p²</p>
                        <p><strong>Number of Electrons:</strong> 32</p>
                        <p><strong>Number of Protons:</strong> 32</p>
                        <p><strong>Number of Neutrons:</strong> 41</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('32').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="33" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={33}
                                symbol="As"
                                atomicWeight="74.922"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Arsenic</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s² 4p³</p>
                        <p><strong>Number of Electrons:</strong> 33</p>
                        <p><strong>Number of Protons:</strong> 33</p>
                        <p><strong>Number of Neutrons:</strong> 42</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('33').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="34" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={34}
                                symbol="Se"
                                atomicWeight="78.971"
                                groupName="group-nonmetals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Selenium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s² 4p⁴</p>
                        <p><strong>Number of Electrons:</strong> 34</p>
                        <p><strong>Number of Protons:</strong> 34</p>
                        <p><strong>Number of Neutrons:</strong> 45</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('34').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="35" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={35}
                                symbol="Br"
                                atomicWeight="79.904"
                                groupName="group-halogen"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Bromine</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s² 4p⁵</p>
                        <p><strong>Number of Electrons:</strong> 35</p>
                        <p><strong>Number of Protons:</strong> 35</p>
                        <p><strong>Number of Neutrons:</strong> 45</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('35').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="36" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={36}
                                symbol="Kr"
                                atomicWeight="83.798"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Krypton</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Ar] 3d¹⁰ 4s² 4p⁶</p>
                        <p><strong>Number of Electrons:</strong> 36</p>
                        <p><strong>Number of Protons:</strong> 36</p>
                        <p><strong>Number of Neutrons:</strong> 48</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('36').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="37" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={37}
                                symbol="Rb"
                                atomicWeight="85.468"
                                groupName="group-alkali"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Rubidium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 5s¹</p>
                        <p><strong>Number of Electrons:</strong> 37</p>
                        <p><strong>Number of Protons:</strong> 37</p>
                        <p><strong>Number of Neutrons:</strong> 48</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('37').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="38" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={38}
                                symbol="Sr"
                                atomicWeight="87.62"
                                groupName="group-alkaline-earth"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Strontium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 5s²</p>
                        <p><strong>Number of Electrons:</strong> 38</p>
                        <p><strong>Number of Protons:</strong> 38</p>
                        <p><strong>Number of Neutrons:</strong> 50</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('38').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="39" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={39}
                                symbol="Y"
                                atomicWeight="88.906"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Yttrium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹ 5s²</p>
                        <p><strong>Number of Electrons:</strong> 39</p>
                        <p><strong>Number of Protons:</strong> 39</p>
                        <p><strong>Number of Neutrons:</strong> 50</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('39').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="40" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={40}
                                symbol="Zr"
                                atomicWeight="91.224"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Zirconium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d² 5s²</p>
                        <p><strong>Number of Electrons:</strong> 40</p>
                        <p><strong>Number of Protons:</strong> 40</p>
                        <p><strong>Number of Neutrons:</strong> 51</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('40').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="41" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={41}
                                symbol="Nb"
                                atomicWeight="92.906"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Niobium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d⁴ 5s¹</p>
                        <p><strong>Number of Electrons:</strong> 41</p>
                        <p><strong>Number of Protons:</strong> 41</p>
                        <p><strong>Number of Neutrons:</strong> 52</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('41').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="42" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={42}
                                symbol="Mo"
                                atomicWeight="95.95"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Molybdenum</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d⁵ 5s¹</p>
                        <p><strong>Number of Electrons:</strong> 42</p>
                        <p><strong>Number of Protons:</strong> 42</p>
                        <p><strong>Number of Neutrons:</strong> 54</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('42').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="43" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={43}
                                symbol="Tc"
                                atomicWeight="98"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Technetium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d⁵ 5s²</p>
                        <p><strong>Number of Electrons:</strong> 43</p>
                        <p><strong>Number of Protons:</strong> 43</p>
                        <p><strong>Number of Neutrons:</strong> 55</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('43').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="44" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={44}
                                symbol="Ru"
                                atomicWeight="101.07"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Ruthenium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d⁷ 5s¹</p>
                        <p><strong>Number of Electrons:</strong> 44</p>
                        <p><strong>Number of Protons:</strong> 44</p>
                        <p><strong>Number of Neutrons:</strong> 57</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('44').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="45" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={45}
                                symbol="Rh"
                                atomicWeight="102.906"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Rhodium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d⁸ 5s¹</p>
                        <p><strong>Number of Electrons:</strong> 45</p>
                        <p><strong>Number of Protons:</strong> 45</p>
                        <p><strong>Number of Neutrons:</strong> 58</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('45').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="46" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={46}
                                symbol="Pd"
                                atomicWeight="106.42"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Palladium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰</p>
                        <p><strong>Number of Electrons:</strong> 46</p>
                        <p><strong>Number of Protons:</strong> 46</p>
                        <p><strong>Number of Neutrons:</strong> 60</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('46').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="47" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={47}
                                symbol="Ag"
                                atomicWeight="107.868"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Silver</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s¹</p>
                        <p><strong>Number of Electrons:</strong> 47</p>
                        <p><strong>Number of Protons:</strong> 47</p>
                        <p><strong>Number of Neutrons:</strong> 61</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('47').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="48" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={48}
                                symbol="Cd"
                                atomicWeight="112.414"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Cadmium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s²</p>
                        <p><strong>Number of Electrons:</strong> 48</p>
                        <p><strong>Number of Protons:</strong> 48</p>
                        <p><strong>Number of Neutrons:</strong> 64</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('48').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="49" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={49}
                                symbol="In"
                                atomicWeight="114.818"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Indium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s² 5p¹</p>
                        <p><strong>Number of Electrons:</strong> 49</p>
                        <p><strong>Number of Protons:</strong> 49</p>
                        <p><strong>Number of Neutrons:</strong> 66</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('49').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="50" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={50}
                                symbol="Sn"
                                atomicWeight="118.71"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Tin</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s² 5p²</p>
                        <p><strong>Number of Electrons:</strong> 50</p>
                        <p><strong>Number of Protons:</strong> 50</p>
                        <p><strong>Number of Neutrons:</strong> 69</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('50').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="51" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={51}
                                symbol="Sb"
                                atomicWeight="121.76"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Antimony</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s² 5p³</p>
                        <p><strong>Number of Electrons:</strong> 51</p>
                        <p><strong>Number of Protons:</strong> 51</p>
                        <p><strong>Number of Neutrons:</strong> 71</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('51').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="52" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={52}
                                symbol="Te"
                                atomicWeight="127.6"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Tellurium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s² 5p⁴</p>
                        <p><strong>Number of Electrons:</strong> 52</p>
                        <p><strong>Number of Protons:</strong> 52</p>
                        <p><strong>Number of Neutrons:</strong> 76</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('52').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="53" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={53}
                                symbol="I"
                                atomicWeight="126.904"
                                groupName="group-halogen"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Iodine</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s² 5p⁵</p>
                        <p><strong>Number of Electrons:</strong> 53</p>
                        <p><strong>Number of Protons:</strong> 53</p>
                        <p><strong>Number of Neutrons:</strong> 74</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('53').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="54" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={54}
                                symbol="Xe"
                                atomicWeight="131.293"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Xenon</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Kr] 4d¹⁰ 5s² 5p⁶</p>
                        <p><strong>Number of Electrons:</strong> 54</p>
                        <p><strong>Number of Protons:</strong> 54</p>
                        <p><strong>Number of Neutrons:</strong> 77</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('54').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="55" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={55}
                                symbol="Cs"
                                atomicWeight="132.905"
                                groupName="group-alkali"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Cesium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 6s¹</p>
                        <p><strong>Number of Electrons:</strong> 55</p>
                        <p><strong>Number of Protons:</strong> 55</p>
                        <p><strong>Number of Neutrons:</strong> 78</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('55').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="56" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={56}
                                symbol="Ba"
                                atomicWeight="137.327"
                                groupName="group-alkaline-earth"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Barium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 6s²</p>
                        <p><strong>Number of Electrons:</strong> 56</p>
                        <p><strong>Number of Protons:</strong> 56</p>
                        <p><strong>Number of Neutrons:</strong> 81</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('56').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="57" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={57}
                                symbol="La"
                                atomicWeight="138.905"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Lanthanum</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 5d¹ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 57</p>
                        <p><strong>Number of Protons:</strong> 57</p>
                        <p><strong>Number of Neutrons:</strong> 82</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('57').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="58" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={58}
                                symbol="Ce"
                                atomicWeight="140.116"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Cerium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹ 5d¹ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 58</p>
                        <p><strong>Number of Protons:</strong> 58</p>
                        <p><strong>Number of Neutrons:</strong> 82</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('58').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="59" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={59}
                                symbol="Pr"
                                atomicWeight="140.908"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Praseodymium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f³ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 59</p>
                        <p><strong>Number of Protons:</strong> 59</p>
                        <p><strong>Number of Neutrons:</strong> 82</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('59').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="60" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={60}
                                symbol="Nd"
                                atomicWeight="144.242"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Neodymium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f⁴ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 60</p>
                        <p><strong>Number of Protons:</strong> 60</p>
                        <p><strong>Number of Neutrons:</strong> 84</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('60').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="61" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={61}
                                symbol="Pm"
                                atomicWeight="145"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Promethium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f⁵ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 61</p>
                        <p><strong>Number of Protons:</strong> 61</p>
                        <p><strong>Number of Neutrons:</strong> 84</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('61').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="62" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={62}
                                symbol="Sm"
                                atomicWeight="150.36"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Samarium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f⁶ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 62</p>
                        <p><strong>Number of Protons:</strong> 62</p>
                        <p><strong>Number of Neutrons:</strong> 88</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('62').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="63" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={63}
                                symbol="Eu"
                                atomicWeight="151.964"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Europium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f⁷ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 63</p>
                        <p><strong>Number of Protons:</strong> 63</p>
                        <p><strong>Number of Neutrons:</strong> 89</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('63').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="64" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={64}
                                symbol="Gd"
                                atomicWeight="157.25"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Gadolinium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f⁷ 5d¹ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 64</p>
                        <p><strong>Number of Protons:</strong> 64</p>
                        <p><strong>Number of Neutrons:</strong> 93</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('64').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="65" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={65}
                                symbol="Tb"
                                atomicWeight="158.925"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Terbium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f⁹ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 65</p>
                        <p><strong>Number of Protons:</strong> 65</p>
                        <p><strong>Number of Neutrons:</strong> 94</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('65').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="66" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={66}
                                symbol="Dy"
                                atomicWeight="162.5"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Dysprosium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁰ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 66</p>
                        <p><strong>Number of Protons:</strong> 66</p>
                        <p><strong>Number of Neutrons:</strong> 97</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('66').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="67" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={67}
                                symbol="Ho"
                                atomicWeight="164.93"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Holmium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹¹ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 67</p>
                        <p><strong>Number of Protons:</strong> 67</p>
                        <p><strong>Number of Neutrons:</strong> 98</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('67').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="68" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={68}
                                symbol="Er"
                                atomicWeight="167.259"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Erbium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹² 6s²</p>
                        <p><strong>Number of Electrons:</strong> 68</p>
                        <p><strong>Number of Protons:</strong> 68</p>
                        <p><strong>Number of Neutrons:</strong> 99</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('68').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="69" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={69}
                                symbol="Tm"
                                atomicWeight="168.934"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Thulium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹³ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 69</p>
                        <p><strong>Number of Protons:</strong> 69</p>
                        <p><strong>Number of Neutrons:</strong> 100</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('69').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="70" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={70}
                                symbol="Yb"
                                atomicWeight="173.045"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Ytterbium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 70</p>
                        <p><strong>Number of Protons:</strong> 70</p>
                        <p><strong>Number of Neutrons:</strong> 103</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('70').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="71" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={71}
                                symbol="Lu"
                                atomicWeight="174.967"
                                groupName="group-lanthanides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Lutetium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 71</p>
                        <p><strong>Number of Protons:</strong> 71</p>
                        <p><strong>Number of Neutrons:</strong> 104</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('71').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="72" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={72}
                                symbol="Hf"
                                atomicWeight="178.49"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Hafnium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d² 6s²</p>
                        <p><strong>Number of Electrons:</strong> 72</p>
                        <p><strong>Number of Protons:</strong> 72</p>
                        <p><strong>Number of Neutrons:</strong> 106</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('72').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="73" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={73}
                                symbol="Ta"
                                atomicWeight="180.948"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Tantalum</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d³ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 73</p>
                        <p><strong>Number of Protons:</strong> 73</p>
                        <p><strong>Number of Neutrons:</strong> 108</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('73').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="74" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={74}
                                symbol="W"
                                atomicWeight="183.84"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Tungsten</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d⁴ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 74</p>
                        <p><strong>Number of Protons:</strong> 74</p>
                        <p><strong>Number of Neutrons:</strong> 110</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('74').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="75" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={75}
                                symbol="Re"
                                atomicWeight="186.207"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Rhenium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d⁵ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 75</p>
                        <p><strong>Number of Protons:</strong> 75</p>
                        <p><strong>Number of Neutrons:</strong> 111</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('75').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="76" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={76}
                                symbol="Os"
                                atomicWeight="190.23"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Osmium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d⁶ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 76</p>
                        <p><strong>Number of Protons:</strong> 76</p>
                        <p><strong>Number of Neutrons:</strong> 114</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('76').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="77" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={77}
                                symbol="Ir"
                                atomicWeight="192.217"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Iridium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d⁷ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 77</p>
                        <p><strong>Number of Protons:</strong> 77</p>
                        <p><strong>Number of Neutrons:</strong> 115</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('77').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="78" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={78}
                                symbol="Pt"
                                atomicWeight="195.084"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Platinum</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d⁹ 6s¹</p>
                        <p><strong>Number of Electrons:</strong> 78</p>
                        <p><strong>Number of Protons:</strong> 78</p>
                        <p><strong>Number of Neutrons:</strong> 117</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('78').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="79" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={79}
                                symbol="Au"
                                atomicWeight="196.967"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Gold</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s¹</p>
                        <p><strong>Number of Electrons:</strong> 79</p>
                        <p><strong>Number of Protons:</strong> 79</p>
                        <p><strong>Number of Neutrons:</strong> 118</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('79').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="80" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={80}
                                symbol="Hg"
                                atomicWeight="200.592"
                                groupName="group-transition"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Mercury</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s²</p>
                        <p><strong>Number of Electrons:</strong> 80</p>
                        <p><strong>Number of Protons:</strong> 80</p>
                        <p><strong>Number of Neutrons:</strong> 121</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('80').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="81" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={81}
                                symbol="Tl"
                                atomicWeight="204.38"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Thallium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹</p>
                        <p><strong>Number of Electrons:</strong> 81</p>
                        <p><strong>Number of Protons:</strong> 81</p>
                        <p><strong>Number of Neutrons:</strong> 123</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('81').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="82" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={82}
                                symbol="Pb"
                                atomicWeight="207.2"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Lead</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²</p>
                        <p><strong>Number of Electrons:</strong> 82</p>
                        <p><strong>Number of Protons:</strong> 82</p>
                        <p><strong>Number of Neutrons:</strong> 125</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('82').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="83" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <ElementBox
                                atomicNumber={83}
                                symbol="Bi"
                                atomicWeight="208.98"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Bismuth</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³</p>
                        <p><strong>Number of Electrons:</strong> 83</p>
                        <p><strong>Number of Protons:</strong> 83</p>
                        <p><strong>Number of Neutrons:</strong> 126</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('83').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="84" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={84}
                                symbol="Po"
                                atomicWeight="209"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Polonium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴</p>
                        <p><strong>Number of Electrons:</strong> 84</p>
                        <p><strong>Number of Protons:</strong> 84</p>
                        <p><strong>Number of Neutrons:</strong> 125</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('84').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="85" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={85}
                                symbol="At"
                                atomicWeight="210"
                                groupName="group-halogen"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Astatine</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵</p>
                        <p><strong>Number of Electrons:</strong> 85</p>
                        <p><strong>Number of Protons:</strong> 85</p>
                        <p><strong>Number of Neutrons:</strong> 125</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('85').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="86" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={86}
                                symbol="Rn"
                                atomicWeight="222"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Radon</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶</p>
                        <p><strong>Number of Electrons:</strong> 86</p>
                        <p><strong>Number of Protons:</strong> 86</p>
                        <p><strong>Number of Neutrons:</strong> 136</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('86').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="87" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={87}
                                symbol="Fr"
                                atomicWeight="223"
                                groupName="group-alkali"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Francium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 7s¹</p>
                        <p><strong>Number of Electrons:</strong> 87</p>
                        <p><strong>Number of Protons:</strong> 87</p>
                        <p><strong>Number of Neutrons:</strong> 136</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('87').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="88" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={88}
                                symbol="Ra"
                                atomicWeight="226"
                                groupName="group-alkaline-earth"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Radium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 7s²</p>
                        <p><strong>Number of Electrons:</strong> 88</p>
                        <p><strong>Number of Protons:</strong> 88</p>
                        <p><strong>Number of Neutrons:</strong> 138</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('88').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="89" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={89}
                                symbol="Ac"
                                atomicWeight="227"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Actinium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 6d¹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 89</p>
                        <p><strong>Number of Protons:</strong> 89</p>
                        <p><strong>Number of Neutrons:</strong> 138</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('89').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="90" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={90}
                                symbol="Th"
                                atomicWeight="232.038"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Thorium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 6d² 7s²</p>
                        <p><strong>Number of Electrons:</strong> 90</p>
                        <p><strong>Number of Protons:</strong> 90</p>
                        <p><strong>Number of Neutrons:</strong> 142</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('90').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="91" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={91}
                                symbol="Pa"
                                atomicWeight="231.036"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Protactinium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f² 6d¹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 91</p>
                        <p><strong>Number of Protons:</strong> 91</p>
                        <p><strong>Number of Neutrons:</strong> 140</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('91').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="92" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={92}
                                symbol="U"
                                atomicWeight="238.029"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Uranium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f³ 6d¹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 92</p>
                        <p><strong>Number of Protons:</strong> 92</p>
                        <p><strong>Number of Neutrons:</strong> 146</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('92').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="93" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={93}
                                symbol="Np"
                                atomicWeight="237"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Neptunium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f⁴ 6d¹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 93</p>
                        <p><strong>Number of Protons:</strong> 93</p>
                        <p><strong>Number of Neutrons:</strong> 144</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('93').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="94" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={94}
                                symbol="Pu"
                                atomicWeight="244"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Plutonium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f⁶ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 94</p>
                        <p><strong>Number of Protons:</strong> 94</p>
                        <p><strong>Number of Neutrons:</strong> 150</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('94').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="95" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={95}
                                symbol="Am"
                                atomicWeight="243"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Americium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f⁷ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 95</p>
                        <p><strong>Number of Protons:</strong> 95</p>
                        <p><strong>Number of Neutrons:</strong> 148</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('95').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="96" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={96}
                                symbol="Cm"
                                atomicWeight="247"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Curium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f⁷ 6d¹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 96</p>
                        <p><strong>Number of Protons:</strong> 96</p>
                        <p><strong>Number of Neutrons:</strong> 151</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('96').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="97" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={97}
                                symbol="Bk"
                                atomicWeight="247"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Berkelium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f⁹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 97</p>
                        <p><strong>Number of Protons:</strong> 97</p>
                        <p><strong>Number of Neutrons:</strong> 150</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('97').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="98" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={98}
                                symbol="Cf"
                                atomicWeight="251"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Californium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁰ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 98</p>
                        <p><strong>Number of Protons:</strong> 98</p>
                        <p><strong>Number of Neutrons:</strong> 153</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('98').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="99" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={99}
                                symbol="Es"
                                atomicWeight="252"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Einsteinium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹¹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 99</p>
                        <p><strong>Number of Protons:</strong> 99</p>
                        <p><strong>Number of Neutrons:</strong> 153</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('99').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="100" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={100}
                                symbol="Fm"
                                atomicWeight="257"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Fermium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹² 7s²</p>
                        <p><strong>Number of Electrons:</strong> 100</p>
                        <p><strong>Number of Protons:</strong> 100</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('100').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="101" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={101}
                                symbol="Md"
                                atomicWeight="258"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Mendelevium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹³ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 101</p>
                        <p><strong>Number of Protons:</strong> 101</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('101').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="102" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={102}
                                symbol="No"
                                atomicWeight="259"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Nobelium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 102</p>
                        <p><strong>Number of Protons:</strong> 102</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('102').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="103" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={103}
                                symbol="Lr"
                                atomicWeight="262"
                                groupName="group-actinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Lawrencium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 7s² 7p¹</p>
                        <p><strong>Number of Electrons:</strong> 103</p>
                        <p><strong>Number of Protons:</strong> 103</p>
                        <p><strong>Number of Neutrons:</strong> 159</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('103').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="104" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={104}
                                symbol="Rf"
                                atomicWeight="267"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Rutherfordium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d² 7s²</p>
                        <p><strong>Number of Electrons:</strong> 104</p>
                        <p><strong>Number of Protons:</strong> 104</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('104').close()}>
                        Close
                    </button>
                </div>
            </dialog>
            <dialog id="105" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={105}
                                symbol="Db"
                                atomicWeight="270"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Dubnium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d³ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 105</p>
                        <p><strong>Number of Protons:</strong> 105</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('105').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="106" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={106}
                                symbol="Sg"
                                atomicWeight="271"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Seaborgium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d⁴ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 106</p>
                        <p><strong>Number of Protons:</strong> 106</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('106').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="107" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={107}
                                symbol="Bh"
                                atomicWeight="270"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Bohrium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d⁵ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 107</p>
                        <p><strong>Number of Protons:</strong> 107</p>
                        <p><strong>Number of Neutrons:</strong> 157</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('107').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="108" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={108}
                                symbol="Hs"
                                atomicWeight="277"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Hassium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d⁶ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 108</p>
                        <p><strong>Number of Protons:</strong> 108</p>
                        <p><strong>Number of Neutrons:</strong> 169</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('108').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="109" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={109}
                                symbol="Mt"
                                atomicWeight="276"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Meitnerium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d⁷ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 109</p>
                        <p><strong>Number of Protons:</strong> 109</p>
                        <p><strong>Number of Neutrons:</strong> 167</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('109').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="110" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={110}
                                symbol="Ds"
                                atomicWeight="281"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Darmstadtium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d⁸ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 110</p>
                        <p><strong>Number of Protons:</strong> 110</p>
                        <p><strong>Number of Neutrons:</strong> 171</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('110').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="111" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={111}
                                symbol="Rg"
                                atomicWeight="280"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Roentgenium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d⁹ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 111</p>
                        <p><strong>Number of Protons:</strong> 111</p>
                        <p><strong>Number of Neutrons:</strong> 171</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('111').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="112" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={112}
                                symbol="Cn"
                                atomicWeight="285"
                                groupName="group-transactinides"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Copernicium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s²</p>
                        <p><strong>Number of Electrons:</strong> 112</p>
                        <p><strong>Number of Protons:</strong> 112</p>
                        <p><strong>Number of Neutrons:</strong> 173</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('112').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="113" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={113}
                                symbol="Nh"
                                atomicWeight="284"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Nihonium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹</p>
                        <p><strong>Number of Electrons:</strong> 113</p>
                        <p><strong>Number of Protons:</strong> 113</p>
                        <p><strong>Number of Neutrons:</strong> 171</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('113').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="114" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={114}
                                symbol="Fl"
                                atomicWeight="289"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Flerovium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²</p>
                        <p><strong>Number of Electrons:</strong> 114</p>
                        <p><strong>Number of Protons:</strong> 114</p>
                        <p><strong>Number of Neutrons:</strong> 175</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('114').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="115" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={115}
                                symbol="Mc"
                                atomicWeight="288"
                                groupName="group-metals"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Moscovium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³</p>
                        <p><strong>Number of Electrons:</strong> 115</p>
                        <p><strong>Number of Protons:</strong> 115</p>
                        <p><strong>Number of Neutrons:</strong> 173</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('115').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="116" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={116}
                                symbol="Lv"
                                atomicWeight="293"
                                groupName="group-metalloids"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Livermorium</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴</p>
                        <p><strong>Number of Electrons:</strong> 116</p>
                        <p><strong>Number of Protons:</strong> 116</p>
                        <p><strong>Number of Neutrons:</strong> 177</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('116').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="117" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={117}
                                symbol="Ts"
                                atomicWeight="294"
                                groupName="group-halogen"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Tennessine</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵</p>
                        <p><strong>Number of Electrons:</strong> 117</p>
                        <p><strong>Number of Protons:</strong> 117</p>
                        <p><strong>Number of Neutrons:</strong> 177</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('117').close()}>
                        Close
                    </button>
                </div>
            </dialog>

            <dialog id="118" className="modal">
                <div className="modal-box bg-black flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <div className="flex justify-center">
                            <RadioActiveElementBox
                                atomicNumber={118}
                                symbol="Og"
                                atomicWeight="294"
                                groupName="group-noble-gases"
                            />
                        </div>
                        <div className="text-white space-y-2 text-center">
                            <h2 className="text-2xl font-bold">Oganesson</h2>
                        </div>
                    </div>
                    <div className="text-sm text-white">
                        <p><strong>Electron Configuration:</strong> [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶</p>
                        <p><strong>Number of Electrons:</strong> 118</p>
                        <p><strong>Number of Protons:</strong> 118</p>
                        <p><strong>Number of Neutrons:</strong> 176</p>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                        onClick={() => document.getElementById('118').close()}>
                        Close
                    </button>
                </div>
            </dialog>
        </div>

    );
};

export default App;