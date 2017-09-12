import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8643Component } from './my-comp-8643.component';

describe('MyComp8643Component', () => {
  let component: MyComp8643Component;
  let fixture: ComponentFixture<MyComp8643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
