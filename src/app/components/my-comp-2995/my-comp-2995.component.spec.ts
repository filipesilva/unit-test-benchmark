import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2995Component } from './my-comp-2995.component';

describe('MyComp2995Component', () => {
  let component: MyComp2995Component;
  let fixture: ComponentFixture<MyComp2995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
