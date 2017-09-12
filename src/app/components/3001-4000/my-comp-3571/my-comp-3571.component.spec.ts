import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3571Component } from './my-comp-3571.component';

describe('MyComp3571Component', () => {
  let component: MyComp3571Component;
  let fixture: ComponentFixture<MyComp3571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
