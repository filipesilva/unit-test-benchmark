import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3508Component } from './my-comp-3508.component';

describe('MyComp3508Component', () => {
  let component: MyComp3508Component;
  let fixture: ComponentFixture<MyComp3508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
