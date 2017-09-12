import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp172Component } from './my-comp-172.component';

describe('MyComp172Component', () => {
  let component: MyComp172Component;
  let fixture: ComponentFixture<MyComp172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
