import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7156Component } from './my-comp-7156.component';

describe('MyComp7156Component', () => {
  let component: MyComp7156Component;
  let fixture: ComponentFixture<MyComp7156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
