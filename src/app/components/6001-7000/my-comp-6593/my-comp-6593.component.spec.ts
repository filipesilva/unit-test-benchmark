import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6593Component } from './my-comp-6593.component';

describe('MyComp6593Component', () => {
  let component: MyComp6593Component;
  let fixture: ComponentFixture<MyComp6593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
