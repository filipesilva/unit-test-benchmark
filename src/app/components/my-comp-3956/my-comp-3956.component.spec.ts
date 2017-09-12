import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3956Component } from './my-comp-3956.component';

describe('MyComp3956Component', () => {
  let component: MyComp3956Component;
  let fixture: ComponentFixture<MyComp3956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
