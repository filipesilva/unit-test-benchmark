import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8200Component } from './my-comp-8200.component';

describe('MyComp8200Component', () => {
  let component: MyComp8200Component;
  let fixture: ComponentFixture<MyComp8200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
