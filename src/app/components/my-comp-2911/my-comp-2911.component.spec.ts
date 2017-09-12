import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2911Component } from './my-comp-2911.component';

describe('MyComp2911Component', () => {
  let component: MyComp2911Component;
  let fixture: ComponentFixture<MyComp2911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
