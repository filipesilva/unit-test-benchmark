import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5005Component } from './my-comp-5005.component';

describe('MyComp5005Component', () => {
  let component: MyComp5005Component;
  let fixture: ComponentFixture<MyComp5005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
