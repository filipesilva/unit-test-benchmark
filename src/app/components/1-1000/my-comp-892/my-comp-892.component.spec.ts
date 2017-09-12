import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp892Component } from './my-comp-892.component';

describe('MyComp892Component', () => {
  let component: MyComp892Component;
  let fixture: ComponentFixture<MyComp892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
