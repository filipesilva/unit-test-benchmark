import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3298Component } from './my-comp-3298.component';

describe('MyComp3298Component', () => {
  let component: MyComp3298Component;
  let fixture: ComponentFixture<MyComp3298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
