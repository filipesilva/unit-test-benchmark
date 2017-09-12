import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp884Component } from './my-comp-884.component';

describe('MyComp884Component', () => {
  let component: MyComp884Component;
  let fixture: ComponentFixture<MyComp884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
