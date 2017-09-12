import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6517Component } from './my-comp-6517.component';

describe('MyComp6517Component', () => {
  let component: MyComp6517Component;
  let fixture: ComponentFixture<MyComp6517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
