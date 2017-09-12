import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6995Component } from './my-comp-6995.component';

describe('MyComp6995Component', () => {
  let component: MyComp6995Component;
  let fixture: ComponentFixture<MyComp6995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
