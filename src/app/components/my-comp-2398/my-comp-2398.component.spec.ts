import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2398Component } from './my-comp-2398.component';

describe('MyComp2398Component', () => {
  let component: MyComp2398Component;
  let fixture: ComponentFixture<MyComp2398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
