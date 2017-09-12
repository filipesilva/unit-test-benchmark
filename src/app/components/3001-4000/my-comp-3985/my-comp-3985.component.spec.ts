import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3985Component } from './my-comp-3985.component';

describe('MyComp3985Component', () => {
  let component: MyComp3985Component;
  let fixture: ComponentFixture<MyComp3985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
