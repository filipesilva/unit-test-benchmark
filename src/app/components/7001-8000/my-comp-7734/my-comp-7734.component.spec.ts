import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7734Component } from './my-comp-7734.component';

describe('MyComp7734Component', () => {
  let component: MyComp7734Component;
  let fixture: ComponentFixture<MyComp7734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
