import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3143Component } from './my-comp-3143.component';

describe('MyComp3143Component', () => {
  let component: MyComp3143Component;
  let fixture: ComponentFixture<MyComp3143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
