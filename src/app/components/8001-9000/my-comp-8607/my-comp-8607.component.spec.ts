import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8607Component } from './my-comp-8607.component';

describe('MyComp8607Component', () => {
  let component: MyComp8607Component;
  let fixture: ComponentFixture<MyComp8607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
