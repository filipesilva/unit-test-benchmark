import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2271Component } from './my-comp-2271.component';

describe('MyComp2271Component', () => {
  let component: MyComp2271Component;
  let fixture: ComponentFixture<MyComp2271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
