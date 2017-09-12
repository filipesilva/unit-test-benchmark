import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp420Component } from './my-comp-420.component';

describe('MyComp420Component', () => {
  let component: MyComp420Component;
  let fixture: ComponentFixture<MyComp420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
