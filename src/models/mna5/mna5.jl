module mna5

using ReachabilityAnalysis, MAT, SparseArrays
using ReachabilityModels: @relpath

file = matopen(@relpath "mna5.mat")

# system matrix
A = sparse(read(file, "A"))

# affine term
b = sparsevec(19:27, [fill(-0.1, 5); fill(-0.2, 4)], 10913)

function model(X0)
    S = @system(x' = Ax + b)
    return IVP(S, X0)
end

end  # module
