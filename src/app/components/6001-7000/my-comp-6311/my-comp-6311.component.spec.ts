import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6311Component } from './my-comp-6311.component';

describe('MyComp6311Component', () => {
  let component: MyComp6311Component;
  let fixture: ComponentFixture<MyComp6311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
