import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3937Component } from './my-comp-3937.component';

describe('MyComp3937Component', () => {
  let component: MyComp3937Component;
  let fixture: ComponentFixture<MyComp3937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
