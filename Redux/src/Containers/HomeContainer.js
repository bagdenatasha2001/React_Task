import { connect } from "react-redux";
import AddToCard  from '../Service/Action/Actions'

import Home from "../Components/Home";


const mapStateToProps = state=>({

})

const mapDispatchToProps = dispatch =>({
    AddToCardHandelar:data=>dispatch(AddToCard(data))

    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// export default Home;