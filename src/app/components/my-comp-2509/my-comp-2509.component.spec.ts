import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2509Component } from './my-comp-2509.component';

describe('MyComp2509Component', () => {
  let component: MyComp2509Component;
  let fixture: ComponentFixture<MyComp2509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
