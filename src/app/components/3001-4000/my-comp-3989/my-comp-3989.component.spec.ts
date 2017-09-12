import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3989Component } from './my-comp-3989.component';

describe('MyComp3989Component', () => {
  let component: MyComp3989Component;
  let fixture: ComponentFixture<MyComp3989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
