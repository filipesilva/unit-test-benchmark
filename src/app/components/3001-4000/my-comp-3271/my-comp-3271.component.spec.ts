import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3271Component } from './my-comp-3271.component';

describe('MyComp3271Component', () => {
  let component: MyComp3271Component;
  let fixture: ComponentFixture<MyComp3271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
