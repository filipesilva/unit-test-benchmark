import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2514Component } from './my-comp-2514.component';

describe('MyComp2514Component', () => {
  let component: MyComp2514Component;
  let fixture: ComponentFixture<MyComp2514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
