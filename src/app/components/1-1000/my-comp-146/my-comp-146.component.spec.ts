import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp146Component } from './my-comp-146.component';

describe('MyComp146Component', () => {
  let component: MyComp146Component;
  let fixture: ComponentFixture<MyComp146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
