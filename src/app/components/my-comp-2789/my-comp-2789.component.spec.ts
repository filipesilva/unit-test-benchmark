import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2789Component } from './my-comp-2789.component';

describe('MyComp2789Component', () => {
  let component: MyComp2789Component;
  let fixture: ComponentFixture<MyComp2789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
