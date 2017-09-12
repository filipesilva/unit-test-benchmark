import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6489Component } from './my-comp-6489.component';

describe('MyComp6489Component', () => {
  let component: MyComp6489Component;
  let fixture: ComponentFixture<MyComp6489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
