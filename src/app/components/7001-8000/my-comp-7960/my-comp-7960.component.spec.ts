import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7960Component } from './my-comp-7960.component';

describe('MyComp7960Component', () => {
  let component: MyComp7960Component;
  let fixture: ComponentFixture<MyComp7960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
