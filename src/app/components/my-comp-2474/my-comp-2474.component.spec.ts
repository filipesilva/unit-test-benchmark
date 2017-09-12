import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2474Component } from './my-comp-2474.component';

describe('MyComp2474Component', () => {
  let component: MyComp2474Component;
  let fixture: ComponentFixture<MyComp2474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
