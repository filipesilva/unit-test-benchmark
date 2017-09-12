import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8586Component } from './my-comp-8586.component';

describe('MyComp8586Component', () => {
  let component: MyComp8586Component;
  let fixture: ComponentFixture<MyComp8586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
