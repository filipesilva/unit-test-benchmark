import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7766Component } from './my-comp-7766.component';

describe('MyComp7766Component', () => {
  let component: MyComp7766Component;
  let fixture: ComponentFixture<MyComp7766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
