import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6835Component } from './my-comp-6835.component';

describe('MyComp6835Component', () => {
  let component: MyComp6835Component;
  let fixture: ComponentFixture<MyComp6835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
