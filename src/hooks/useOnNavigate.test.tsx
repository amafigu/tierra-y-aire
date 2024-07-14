import { useOnNavigate } from '@/hooks/useOnNavigate'
import { act, renderHook } from '@testing-library/react'
import { useNavigate } from 'react-router-dom'
import { Mock, vi } from 'vitest'

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}))

describe('useOnNavigate', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    ;(useNavigate as Mock).mockReturnValue(mockNavigate)
    global.scroll = vi.fn()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('calls navigate with the correct route and sets setters to false', () => {
    const firstSetter = vi.fn()
    const secondSetter = vi.fn()
    const route = '/test-route'

    const { result } = renderHook(() => useOnNavigate())

    act(() => {
      result.current.onNavigate([firstSetter, secondSetter], route)
    })

    expect(firstSetter).toHaveBeenCalledWith(false)
    expect(secondSetter).toHaveBeenCalledWith(false)
    expect(mockNavigate).toHaveBeenCalledWith(route)
    expect(global.scroll).toHaveBeenCalledWith(0, 0)
  })
})
