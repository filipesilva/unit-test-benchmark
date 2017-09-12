import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6156Component } from './my-comp-6156.component';

describe('MyComp6156Component', () => {
  let component: MyComp6156Component;
  let fixture: ComponentFixture<MyComp6156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
