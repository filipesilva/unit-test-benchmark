import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6884Component } from './my-comp-6884.component';

describe('MyComp6884Component', () => {
  let component: MyComp6884Component;
  let fixture: ComponentFixture<MyComp6884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
