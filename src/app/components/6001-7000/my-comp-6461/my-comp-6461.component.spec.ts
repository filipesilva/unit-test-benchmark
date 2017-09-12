import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6461Component } from './my-comp-6461.component';

describe('MyComp6461Component', () => {
  let component: MyComp6461Component;
  let fixture: ComponentFixture<MyComp6461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
