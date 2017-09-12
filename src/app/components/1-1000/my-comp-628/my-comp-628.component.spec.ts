import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp628Component } from './my-comp-628.component';

describe('MyComp628Component', () => {
  let component: MyComp628Component;
  let fixture: ComponentFixture<MyComp628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
