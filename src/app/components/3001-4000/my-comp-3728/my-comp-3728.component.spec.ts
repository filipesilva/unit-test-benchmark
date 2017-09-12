import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3728Component } from './my-comp-3728.component';

describe('MyComp3728Component', () => {
  let component: MyComp3728Component;
  let fixture: ComponentFixture<MyComp3728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
