import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6025Component } from './my-comp-6025.component';

describe('MyComp6025Component', () => {
  let component: MyComp6025Component;
  let fixture: ComponentFixture<MyComp6025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
