import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6730Component } from './my-comp-6730.component';

describe('MyComp6730Component', () => {
  let component: MyComp6730Component;
  let fixture: ComponentFixture<MyComp6730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
