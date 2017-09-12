import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7045Component } from './my-comp-7045.component';

describe('MyComp7045Component', () => {
  let component: MyComp7045Component;
  let fixture: ComponentFixture<MyComp7045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
