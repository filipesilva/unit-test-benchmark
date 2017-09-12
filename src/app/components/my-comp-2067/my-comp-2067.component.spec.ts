import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2067Component } from './my-comp-2067.component';

describe('MyComp2067Component', () => {
  let component: MyComp2067Component;
  let fixture: ComponentFixture<MyComp2067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
