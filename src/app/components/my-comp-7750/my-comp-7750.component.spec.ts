import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7750Component } from './my-comp-7750.component';

describe('MyComp7750Component', () => {
  let component: MyComp7750Component;
  let fixture: ComponentFixture<MyComp7750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
