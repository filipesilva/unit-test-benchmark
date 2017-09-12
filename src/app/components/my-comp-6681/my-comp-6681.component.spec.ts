import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6681Component } from './my-comp-6681.component';

describe('MyComp6681Component', () => {
  let component: MyComp6681Component;
  let fixture: ComponentFixture<MyComp6681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
