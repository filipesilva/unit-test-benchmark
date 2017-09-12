import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6565Component } from './my-comp-6565.component';

describe('MyComp6565Component', () => {
  let component: MyComp6565Component;
  let fixture: ComponentFixture<MyComp6565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
