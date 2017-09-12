import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3121Component } from './my-comp-3121.component';

describe('MyComp3121Component', () => {
  let component: MyComp3121Component;
  let fixture: ComponentFixture<MyComp3121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
