import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2172Component } from './my-comp-2172.component';

describe('MyComp2172Component', () => {
  let component: MyComp2172Component;
  let fixture: ComponentFixture<MyComp2172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
