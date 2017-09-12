import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2821Component } from './my-comp-2821.component';

describe('MyComp2821Component', () => {
  let component: MyComp2821Component;
  let fixture: ComponentFixture<MyComp2821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
