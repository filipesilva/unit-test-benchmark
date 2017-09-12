import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3583Component } from './my-comp-3583.component';

describe('MyComp3583Component', () => {
  let component: MyComp3583Component;
  let fixture: ComponentFixture<MyComp3583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
