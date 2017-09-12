import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5274Component } from './my-comp-5274.component';

describe('MyComp5274Component', () => {
  let component: MyComp5274Component;
  let fixture: ComponentFixture<MyComp5274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
