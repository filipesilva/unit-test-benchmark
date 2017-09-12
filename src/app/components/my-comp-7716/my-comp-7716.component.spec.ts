import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7716Component } from './my-comp-7716.component';

describe('MyComp7716Component', () => {
  let component: MyComp7716Component;
  let fixture: ComponentFixture<MyComp7716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
