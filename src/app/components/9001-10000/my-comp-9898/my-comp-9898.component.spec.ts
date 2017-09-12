import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9898Component } from './my-comp-9898.component';

describe('MyComp9898Component', () => {
  let component: MyComp9898Component;
  let fixture: ComponentFixture<MyComp9898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
