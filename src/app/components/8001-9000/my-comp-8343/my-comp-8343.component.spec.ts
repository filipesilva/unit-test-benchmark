import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8343Component } from './my-comp-8343.component';

describe('MyComp8343Component', () => {
  let component: MyComp8343Component;
  let fixture: ComponentFixture<MyComp8343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
