import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2498Component } from './my-comp-2498.component';

describe('MyComp2498Component', () => {
  let component: MyComp2498Component;
  let fixture: ComponentFixture<MyComp2498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
