using ReachabilityAnalysis
Dict([
    "opts" => Dict(:T=>10.0, :alg=>TMJets(abs_tol=1e-15, orderT=10, orderQ=2, max_steps=50_000)),
    "X0"   => Hyperrectangle(low=[-0.5, -0.5], high=[-0.4, -0.4]),
    "info" => Dict(
        "name" => "buckling_column",
        "dim" => 2,
        "linear" => false,
        "hybrid" => false
    )
])
