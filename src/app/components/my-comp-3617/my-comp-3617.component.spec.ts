import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3617Component } from './my-comp-3617.component';

describe('MyComp3617Component', () => {
  let component: MyComp3617Component;
  let fixture: ComponentFixture<MyComp3617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
