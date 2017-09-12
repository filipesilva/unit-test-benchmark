import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2377Component } from './my-comp-2377.component';

describe('MyComp2377Component', () => {
  let component: MyComp2377Component;
  let fixture: ComponentFixture<MyComp2377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
