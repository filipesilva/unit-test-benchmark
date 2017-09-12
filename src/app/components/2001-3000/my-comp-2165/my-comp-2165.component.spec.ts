import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2165Component } from './my-comp-2165.component';

describe('MyComp2165Component', () => {
  let component: MyComp2165Component;
  let fixture: ComponentFixture<MyComp2165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
