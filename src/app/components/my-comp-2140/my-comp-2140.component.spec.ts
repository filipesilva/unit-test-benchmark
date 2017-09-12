import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2140Component } from './my-comp-2140.component';

describe('MyComp2140Component', () => {
  let component: MyComp2140Component;
  let fixture: ComponentFixture<MyComp2140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
