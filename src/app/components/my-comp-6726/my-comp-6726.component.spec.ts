import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6726Component } from './my-comp-6726.component';

describe('MyComp6726Component', () => {
  let component: MyComp6726Component;
  let fixture: ComponentFixture<MyComp6726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
