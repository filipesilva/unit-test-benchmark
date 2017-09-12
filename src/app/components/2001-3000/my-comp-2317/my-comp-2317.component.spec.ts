import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2317Component } from './my-comp-2317.component';

describe('MyComp2317Component', () => {
  let component: MyComp2317Component;
  let fixture: ComponentFixture<MyComp2317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
