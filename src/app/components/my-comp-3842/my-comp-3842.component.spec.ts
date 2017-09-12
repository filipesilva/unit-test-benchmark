import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3842Component } from './my-comp-3842.component';

describe('MyComp3842Component', () => {
  let component: MyComp3842Component;
  let fixture: ComponentFixture<MyComp3842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
