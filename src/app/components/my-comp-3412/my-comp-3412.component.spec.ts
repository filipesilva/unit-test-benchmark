import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3412Component } from './my-comp-3412.component';

describe('MyComp3412Component', () => {
  let component: MyComp3412Component;
  let fixture: ComponentFixture<MyComp3412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
