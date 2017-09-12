import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5027Component } from './my-comp-5027.component';

describe('MyComp5027Component', () => {
  let component: MyComp5027Component;
  let fixture: ComponentFixture<MyComp5027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
