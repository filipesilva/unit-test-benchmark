import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2397Component } from './my-comp-2397.component';

describe('MyComp2397Component', () => {
  let component: MyComp2397Component;
  let fixture: ComponentFixture<MyComp2397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
