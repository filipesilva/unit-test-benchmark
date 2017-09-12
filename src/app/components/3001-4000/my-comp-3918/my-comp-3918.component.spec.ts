import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3918Component } from './my-comp-3918.component';

describe('MyComp3918Component', () => {
  let component: MyComp3918Component;
  let fixture: ComponentFixture<MyComp3918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
