import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8806Component } from './my-comp-8806.component';

describe('MyComp8806Component', () => {
  let component: MyComp8806Component;
  let fixture: ComponentFixture<MyComp8806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
