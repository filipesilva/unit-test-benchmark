import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp667Component } from './my-comp-667.component';

describe('MyComp667Component', () => {
  let component: MyComp667Component;
  let fixture: ComponentFixture<MyComp667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
