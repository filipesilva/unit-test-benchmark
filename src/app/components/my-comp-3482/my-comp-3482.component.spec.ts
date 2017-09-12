import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3482Component } from './my-comp-3482.component';

describe('MyComp3482Component', () => {
  let component: MyComp3482Component;
  let fixture: ComponentFixture<MyComp3482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
