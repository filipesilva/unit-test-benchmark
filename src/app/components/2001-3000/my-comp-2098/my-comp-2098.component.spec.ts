import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2098Component } from './my-comp-2098.component';

describe('MyComp2098Component', () => {
  let component: MyComp2098Component;
  let fixture: ComponentFixture<MyComp2098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
