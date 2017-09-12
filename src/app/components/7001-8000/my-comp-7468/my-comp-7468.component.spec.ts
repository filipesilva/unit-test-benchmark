import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7468Component } from './my-comp-7468.component';

describe('MyComp7468Component', () => {
  let component: MyComp7468Component;
  let fixture: ComponentFixture<MyComp7468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
