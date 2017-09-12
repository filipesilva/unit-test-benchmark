import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3829Component } from './my-comp-3829.component';

describe('MyComp3829Component', () => {
  let component: MyComp3829Component;
  let fixture: ComponentFixture<MyComp3829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
