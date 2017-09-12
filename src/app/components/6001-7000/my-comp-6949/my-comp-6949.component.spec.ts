import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6949Component } from './my-comp-6949.component';

describe('MyComp6949Component', () => {
  let component: MyComp6949Component;
  let fixture: ComponentFixture<MyComp6949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
