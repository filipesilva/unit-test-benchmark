import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8027Component } from './my-comp-8027.component';

describe('MyComp8027Component', () => {
  let component: MyComp8027Component;
  let fixture: ComponentFixture<MyComp8027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
