import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5986Component } from './my-comp-5986.component';

describe('MyComp5986Component', () => {
  let component: MyComp5986Component;
  let fixture: ComponentFixture<MyComp5986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
