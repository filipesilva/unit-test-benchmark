import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5264Component } from './my-comp-5264.component';

describe('MyComp5264Component', () => {
  let component: MyComp5264Component;
  let fixture: ComponentFixture<MyComp5264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
