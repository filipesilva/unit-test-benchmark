import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7518Component } from './my-comp-7518.component';

describe('MyComp7518Component', () => {
  let component: MyComp7518Component;
  let fixture: ComponentFixture<MyComp7518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
