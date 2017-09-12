import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3541Component } from './my-comp-3541.component';

describe('MyComp3541Component', () => {
  let component: MyComp3541Component;
  let fixture: ComponentFixture<MyComp3541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
