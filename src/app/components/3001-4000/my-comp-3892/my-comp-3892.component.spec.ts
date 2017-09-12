import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3892Component } from './my-comp-3892.component';

describe('MyComp3892Component', () => {
  let component: MyComp3892Component;
  let fixture: ComponentFixture<MyComp3892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
