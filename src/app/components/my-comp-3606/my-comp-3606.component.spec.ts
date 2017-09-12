import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3606Component } from './my-comp-3606.component';

describe('MyComp3606Component', () => {
  let component: MyComp3606Component;
  let fixture: ComponentFixture<MyComp3606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
