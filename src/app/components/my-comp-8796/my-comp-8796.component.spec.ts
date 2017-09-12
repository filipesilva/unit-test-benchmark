import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8796Component } from './my-comp-8796.component';

describe('MyComp8796Component', () => {
  let component: MyComp8796Component;
  let fixture: ComponentFixture<MyComp8796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
