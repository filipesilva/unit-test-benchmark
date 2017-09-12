import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3041Component } from './my-comp-3041.component';

describe('MyComp3041Component', () => {
  let component: MyComp3041Component;
  let fixture: ComponentFixture<MyComp3041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
