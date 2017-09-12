import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3593Component } from './my-comp-3593.component';

describe('MyComp3593Component', () => {
  let component: MyComp3593Component;
  let fixture: ComponentFixture<MyComp3593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
