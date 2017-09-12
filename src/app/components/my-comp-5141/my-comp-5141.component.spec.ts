import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5141Component } from './my-comp-5141.component';

describe('MyComp5141Component', () => {
  let component: MyComp5141Component;
  let fixture: ComponentFixture<MyComp5141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
