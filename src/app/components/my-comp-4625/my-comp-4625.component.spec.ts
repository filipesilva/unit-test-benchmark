import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4625Component } from './my-comp-4625.component';

describe('MyComp4625Component', () => {
  let component: MyComp4625Component;
  let fixture: ComponentFixture<MyComp4625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
