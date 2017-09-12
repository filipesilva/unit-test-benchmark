import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8409Component } from './my-comp-8409.component';

describe('MyComp8409Component', () => {
  let component: MyComp8409Component;
  let fixture: ComponentFixture<MyComp8409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
