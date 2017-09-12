import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2578Component } from './my-comp-2578.component';

describe('MyComp2578Component', () => {
  let component: MyComp2578Component;
  let fixture: ComponentFixture<MyComp2578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
