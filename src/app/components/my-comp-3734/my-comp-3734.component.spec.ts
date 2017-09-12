import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3734Component } from './my-comp-3734.component';

describe('MyComp3734Component', () => {
  let component: MyComp3734Component;
  let fixture: ComponentFixture<MyComp3734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
