import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2467Component } from './my-comp-2467.component';

describe('MyComp2467Component', () => {
  let component: MyComp2467Component;
  let fixture: ComponentFixture<MyComp2467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
