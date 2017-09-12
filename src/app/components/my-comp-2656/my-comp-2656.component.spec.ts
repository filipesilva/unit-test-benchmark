import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2656Component } from './my-comp-2656.component';

describe('MyComp2656Component', () => {
  let component: MyComp2656Component;
  let fixture: ComponentFixture<MyComp2656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
