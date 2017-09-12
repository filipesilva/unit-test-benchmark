import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2032Component } from './my-comp-2032.component';

describe('MyComp2032Component', () => {
  let component: MyComp2032Component;
  let fixture: ComponentFixture<MyComp2032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
