import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2104Component } from './my-comp-2104.component';

describe('MyComp2104Component', () => {
  let component: MyComp2104Component;
  let fixture: ComponentFixture<MyComp2104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
