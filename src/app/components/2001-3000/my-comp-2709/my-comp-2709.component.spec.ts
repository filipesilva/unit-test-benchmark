import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2709Component } from './my-comp-2709.component';

describe('MyComp2709Component', () => {
  let component: MyComp2709Component;
  let fixture: ComponentFixture<MyComp2709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
