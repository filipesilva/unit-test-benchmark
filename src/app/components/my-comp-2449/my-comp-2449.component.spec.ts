import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2449Component } from './my-comp-2449.component';

describe('MyComp2449Component', () => {
  let component: MyComp2449Component;
  let fixture: ComponentFixture<MyComp2449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
