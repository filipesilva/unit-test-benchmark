import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8651Component } from './my-comp-8651.component';

describe('MyComp8651Component', () => {
  let component: MyComp8651Component;
  let fixture: ComponentFixture<MyComp8651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
