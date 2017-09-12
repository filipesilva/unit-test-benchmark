import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3719Component } from './my-comp-3719.component';

describe('MyComp3719Component', () => {
  let component: MyComp3719Component;
  let fixture: ComponentFixture<MyComp3719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
