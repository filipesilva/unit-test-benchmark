import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3574Component } from './my-comp-3574.component';

describe('MyComp3574Component', () => {
  let component: MyComp3574Component;
  let fixture: ComponentFixture<MyComp3574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
