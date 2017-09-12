import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8688Component } from './my-comp-8688.component';

describe('MyComp8688Component', () => {
  let component: MyComp8688Component;
  let fixture: ComponentFixture<MyComp8688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
