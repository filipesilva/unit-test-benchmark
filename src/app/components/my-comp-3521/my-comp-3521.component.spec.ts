import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3521Component } from './my-comp-3521.component';

describe('MyComp3521Component', () => {
  let component: MyComp3521Component;
  let fixture: ComponentFixture<MyComp3521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
