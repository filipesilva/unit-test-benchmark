import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp780Component } from './my-comp-780.component';

describe('MyComp780Component', () => {
  let component: MyComp780Component;
  let fixture: ComponentFixture<MyComp780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
