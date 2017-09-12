import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5651Component } from './my-comp-5651.component';

describe('MyComp5651Component', () => {
  let component: MyComp5651Component;
  let fixture: ComponentFixture<MyComp5651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
