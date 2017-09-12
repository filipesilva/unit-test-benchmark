import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6275Component } from './my-comp-6275.component';

describe('MyComp6275Component', () => {
  let component: MyComp6275Component;
  let fixture: ComponentFixture<MyComp6275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
