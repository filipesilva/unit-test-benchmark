import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8749Component } from './my-comp-8749.component';

describe('MyComp8749Component', () => {
  let component: MyComp8749Component;
  let fixture: ComponentFixture<MyComp8749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
