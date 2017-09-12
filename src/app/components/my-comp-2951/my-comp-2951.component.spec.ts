import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2951Component } from './my-comp-2951.component';

describe('MyComp2951Component', () => {
  let component: MyComp2951Component;
  let fixture: ComponentFixture<MyComp2951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
