import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6294Component } from './my-comp-6294.component';

describe('MyComp6294Component', () => {
  let component: MyComp6294Component;
  let fixture: ComponentFixture<MyComp6294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
