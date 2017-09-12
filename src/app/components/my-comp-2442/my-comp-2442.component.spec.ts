import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2442Component } from './my-comp-2442.component';

describe('MyComp2442Component', () => {
  let component: MyComp2442Component;
  let fixture: ComponentFixture<MyComp2442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
