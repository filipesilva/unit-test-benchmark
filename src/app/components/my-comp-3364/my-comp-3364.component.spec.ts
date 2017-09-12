import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3364Component } from './my-comp-3364.component';

describe('MyComp3364Component', () => {
  let component: MyComp3364Component;
  let fixture: ComponentFixture<MyComp3364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
