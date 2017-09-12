import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2402Component } from './my-comp-2402.component';

describe('MyComp2402Component', () => {
  let component: MyComp2402Component;
  let fixture: ComponentFixture<MyComp2402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
