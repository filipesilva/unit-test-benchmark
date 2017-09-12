import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3753Component } from './my-comp-3753.component';

describe('MyComp3753Component', () => {
  let component: MyComp3753Component;
  let fixture: ComponentFixture<MyComp3753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
