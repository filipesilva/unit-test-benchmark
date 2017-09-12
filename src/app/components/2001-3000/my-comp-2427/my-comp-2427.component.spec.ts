import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2427Component } from './my-comp-2427.component';

describe('MyComp2427Component', () => {
  let component: MyComp2427Component;
  let fixture: ComponentFixture<MyComp2427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
