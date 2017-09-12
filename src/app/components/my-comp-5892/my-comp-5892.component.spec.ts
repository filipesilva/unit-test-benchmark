import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5892Component } from './my-comp-5892.component';

describe('MyComp5892Component', () => {
  let component: MyComp5892Component;
  let fixture: ComponentFixture<MyComp5892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
