import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5273Component } from './my-comp-5273.component';

describe('MyComp5273Component', () => {
  let component: MyComp5273Component;
  let fixture: ComponentFixture<MyComp5273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
