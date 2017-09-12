import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3223Component } from './my-comp-3223.component';

describe('MyComp3223Component', () => {
  let component: MyComp3223Component;
  let fixture: ComponentFixture<MyComp3223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
