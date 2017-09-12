import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4254Component } from './my-comp-4254.component';

describe('MyComp4254Component', () => {
  let component: MyComp4254Component;
  let fixture: ComponentFixture<MyComp4254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
