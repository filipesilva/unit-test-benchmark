import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp429Component } from './my-comp-429.component';

describe('MyComp429Component', () => {
  let component: MyComp429Component;
  let fixture: ComponentFixture<MyComp429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
