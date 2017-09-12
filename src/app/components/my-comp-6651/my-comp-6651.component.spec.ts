import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6651Component } from './my-comp-6651.component';

describe('MyComp6651Component', () => {
  let component: MyComp6651Component;
  let fixture: ComponentFixture<MyComp6651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
