import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6300Component } from './my-comp-6300.component';

describe('MyComp6300Component', () => {
  let component: MyComp6300Component;
  let fixture: ComponentFixture<MyComp6300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
