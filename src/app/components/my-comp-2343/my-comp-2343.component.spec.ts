import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2343Component } from './my-comp-2343.component';

describe('MyComp2343Component', () => {
  let component: MyComp2343Component;
  let fixture: ComponentFixture<MyComp2343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
