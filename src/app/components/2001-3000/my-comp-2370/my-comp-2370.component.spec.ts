import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2370Component } from './my-comp-2370.component';

describe('MyComp2370Component', () => {
  let component: MyComp2370Component;
  let fixture: ComponentFixture<MyComp2370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
