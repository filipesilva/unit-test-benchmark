import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp758Component } from './my-comp-758.component';

describe('MyComp758Component', () => {
  let component: MyComp758Component;
  let fixture: ComponentFixture<MyComp758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
