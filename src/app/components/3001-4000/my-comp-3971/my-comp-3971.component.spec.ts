import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3971Component } from './my-comp-3971.component';

describe('MyComp3971Component', () => {
  let component: MyComp3971Component;
  let fixture: ComponentFixture<MyComp3971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
