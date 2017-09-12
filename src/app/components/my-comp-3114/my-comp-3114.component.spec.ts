import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3114Component } from './my-comp-3114.component';

describe('MyComp3114Component', () => {
  let component: MyComp3114Component;
  let fixture: ComponentFixture<MyComp3114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
