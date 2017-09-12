import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8816Component } from './my-comp-8816.component';

describe('MyComp8816Component', () => {
  let component: MyComp8816Component;
  let fixture: ComponentFixture<MyComp8816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
