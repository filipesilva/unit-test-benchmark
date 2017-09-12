import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6907Component } from './my-comp-6907.component';

describe('MyComp6907Component', () => {
  let component: MyComp6907Component;
  let fixture: ComponentFixture<MyComp6907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
