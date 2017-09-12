import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3185Component } from './my-comp-3185.component';

describe('MyComp3185Component', () => {
  let component: MyComp3185Component;
  let fixture: ComponentFixture<MyComp3185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
