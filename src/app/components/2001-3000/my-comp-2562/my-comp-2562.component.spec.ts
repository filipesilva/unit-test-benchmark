import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2562Component } from './my-comp-2562.component';

describe('MyComp2562Component', () => {
  let component: MyComp2562Component;
  let fixture: ComponentFixture<MyComp2562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
