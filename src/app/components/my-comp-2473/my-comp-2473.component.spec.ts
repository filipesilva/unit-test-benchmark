import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2473Component } from './my-comp-2473.component';

describe('MyComp2473Component', () => {
  let component: MyComp2473Component;
  let fixture: ComponentFixture<MyComp2473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
