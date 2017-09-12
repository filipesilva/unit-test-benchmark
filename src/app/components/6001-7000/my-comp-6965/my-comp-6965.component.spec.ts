import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6965Component } from './my-comp-6965.component';

describe('MyComp6965Component', () => {
  let component: MyComp6965Component;
  let fixture: ComponentFixture<MyComp6965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
