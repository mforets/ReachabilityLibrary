using ReachabilityAnalysis
Dict([
    "opts" => Dict(:T=>100.0, :alg=>TMJets(abs_tol=1e-10, orderT=5, orderQ=2, max_steps=5_000)),
    "X0"   => [(1, Hyperrectangle(low=[-65.0, -0.2], high=[-60.0, 0.2]))],
    "info" => Dict(
        "name" => "spiking_neuron",
        "dim" => 2,
        "linear" => false,
        "hybrid" => true
    )
])