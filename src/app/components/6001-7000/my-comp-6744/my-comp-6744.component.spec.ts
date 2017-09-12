import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6744Component } from './my-comp-6744.component';

describe('MyComp6744Component', () => {
  let component: MyComp6744Component;
  let fixture: ComponentFixture<MyComp6744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
