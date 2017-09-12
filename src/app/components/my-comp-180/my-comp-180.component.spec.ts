import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp180Component } from './my-comp-180.component';

describe('MyComp180Component', () => {
  let component: MyComp180Component;
  let fixture: ComponentFixture<MyComp180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
