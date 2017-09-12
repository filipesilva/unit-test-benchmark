import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3766Component } from './my-comp-3766.component';

describe('MyComp3766Component', () => {
  let component: MyComp3766Component;
  let fixture: ComponentFixture<MyComp3766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
