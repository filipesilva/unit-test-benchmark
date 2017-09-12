import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6772Component } from './my-comp-6772.component';

describe('MyComp6772Component', () => {
  let component: MyComp6772Component;
  let fixture: ComponentFixture<MyComp6772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
