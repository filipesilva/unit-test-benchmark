import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8238Component } from './my-comp-8238.component';

describe('MyComp8238Component', () => {
  let component: MyComp8238Component;
  let fixture: ComponentFixture<MyComp8238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
